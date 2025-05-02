import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const ViewEmployee = () => {
  const navigation = useNavigation();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:9000/addemployee/findAll');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched Employees:', data);
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    console.log('Edit Employee with ID:', id);
    navigation.navigate('update', { id });
  };

  const handleDelete = async (id) => {
    Alert.alert(
      'Delete Employee',
      'Are you sure you want to delete this employee?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const response = await fetch(`http://localhost:9000/addemployee/${id}`, {
                method: 'DELETE',
              });
  
              if (response.ok) {
                console.log(`Deleted employee with ID: ${id}`);
                setEmployees((prev) => prev.filter((emp) => emp._id !== id)); 
              } else {
                console.error('Failed to delete employee');
              }
            } catch (error) {
              console.error('Error deleting employee:', error);
            }
          },
          style: 'destructive',
        },
      ]
    );
  };
  

  const toggleDetails = (id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.fullname}</Text>
      <Text style={styles.detail}>Employee ID: {item.employeeid}</Text>
      <Text style={styles.detail}>Designation: {item.designation}</Text>
      <Text style={styles.detail}>Mobile No: {item.mobileno}</Text>

      {expanded[item._id] && (
        <>
          <Text style={styles.detail}>Date of Birth: {item.dateofbirth?.substring(0, 10)}</Text>
          <Text style={styles.detail}>Joining Date: {item.joiningdate?.substring(0, 10)}</Text>
          <Text style={styles.detail}>Salary: {item.salary}</Text>
          <Text style={styles.detail}>Address: {item.address}</Text>
        </>
      )}

      <TouchableOpacity onPress={() => toggleDetails(item._id)} style={styles.toggleButton}>
        <Text style={styles.toggleText}>{expanded[item._id] ? 'View Less' : 'View More'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleEdit(item._id)} style={styles.editIcon}>
        <FontAwesome6 name="edit" size={20} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleDelete(item._id)} style={styles.deleteIcon}>
        <AntDesign name="delete" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#00AA88" style={{ marginTop: 50 }} />;
  }

  if (employees.length === 0) {
    return (
      <View style={{ marginTop: 50, alignItems: 'center' }}>
        <Text>No employees available</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={employees}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    position: 'relative',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  detail: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
  toggleButton: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#00AA88',
    borderRadius: 5,
    alignItems: 'center',
  },
  toggleText: {
    color: '#fff',
    fontSize: 14,
  },
  editIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 20,
  },
  deleteIcon: {
    position: 'absolute',
    top: 66, 
    right: 16,
    backgroundColor: '#f8d7da',
    padding: 8,
    borderRadius: 20,
  },
});

export default ViewEmployee;
