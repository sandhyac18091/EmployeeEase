import { Pressable, StyleSheet, TextInput, View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

const Employee = () => {
  const router = useRouter();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      
      const response = await fetch('http://localhost:9000/addemployee/find/{id}');



      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const renderEmployee = ({ item }) => (
    <View
      style={{
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <View>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: 'gray' }}>{item.position}</Text>
      </View>
      <Text style={{ fontSize: 14 }}>{item.id}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Ionicons style={{ marginLeft: 10 }} name="arrow-back" size={24} color="black" />

        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          height: 40,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: '#ccc',
          justifyContent: 'space-between'
        }}>
          <AntDesign name="search1" size={20} color="black" />
          <TextInput style={{ flex: 1, marginLeft: 10 }} placeholder="Search Employees" />
          <Pressable onPress={() => router.push('/adddetails')}>
            <AntDesign name="pluscircle" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      {employees.length > 0 ? (
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Employee List</Text>
            <Text style={{ fontSize: 14, color: 'gray', marginTop: 5 }}>Showing search results...</Text>
          </View>
          <FlatList
            data={employees}
            renderItem={renderEmployee}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ marginTop: 20 }}
          />
        </View>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>No Data</Text>
          <Text style={{ fontSize: 14, color: 'gray', textAlign: 'center' }}>
            Press the plus button below to add an employee
          </Text>
        </View>
      )}
    </View>
  );
};

export default Employee;

const styles = StyleSheet.create({});
