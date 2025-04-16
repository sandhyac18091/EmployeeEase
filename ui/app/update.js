import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const UpdateEmployee = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await fetch(`http://localhost:9000/addemployee/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setEmployee(data);
    } catch (error) {
      console.error('Error fetching employee:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!employee) return;

    const updatedEmployee = {
      employeeid: employee.employeeid,
      fullname: employee.fullname,
      designation: employee.designation,
      joiningdate: employee.joiningdate,
      salary: employee.salary,
    };

    try {
      const response = await fetch(`http://localhost:9000/addemployee/update/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEmployee),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      navigation.goBack(); 
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#00AA88" style={{ marginTop: 50 }} />;
  }

  if (!employee) {
    return (
      <View style={{ marginTop: 50, alignItems: 'center' }}>
        <Text>No employee data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update Employee</Text>
    
      <Text style={styles.label}>Employee ID</Text>
      <TextInput
        style={styles.input}
        value={employee.employeeid}
        onChangeText={(text) => setEmployee({ ...employee, employeeid: text })}
        placeholder="Employee ID"
        editable={false} 
      />

      <Text style={styles.label}>Fullname</Text>
      <TextInput
        style={styles.input}
        value={employee.fullname}
        onChangeText={(text) => setEmployee({ ...employee, fullname: text })}
        placeholder="Full Name"
      />
     <Text style={styles.label}>Designation</Text>
      <TextInput
        style={styles.input}
        value={employee.designation}
        onChangeText={(text) => setEmployee({ ...employee, designation: text })}
        placeholder="Designation"
      />
       <Text style={styles.label}>Joining Date</Text>
      <TextInput
        style={styles.input}
        value={employee.joiningdate?.substring(0, 10)}
        onChangeText={(text) => setEmployee({ ...employee, joiningdate: text })}
        placeholder="Joining Date"
      />
       <Text style={styles.label}>Salary</Text>
      <TextInput
        style={styles.input}
        value={employee.salary}
        onChangeText={(text) => setEmployee({ ...employee, salary: text })}
        placeholder="Salary"
        keyboardType="numeric"
      />

      <Button title="Update Employee" onPress={handleUpdate} color="#00AA88" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  
});

export default UpdateEmployee;
