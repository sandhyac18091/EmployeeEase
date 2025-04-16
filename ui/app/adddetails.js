import { StyleSheet, Text, View, ScrollView, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const Adddetails = () => {
  const router = useRouter();

  const [fullname, setFullname] = useState('');
  const [employeeid, setEmployeeId] = useState('');
  const [designation, setDesignation] = useState('');
  const [mobile, setMobile] = useState('');
  const [dateofbirth, setDob] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [salary, setSalary] = useState('');
  const [address, setAddress] = useState('');
  

  
  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toISOString().split('T')[0]; 
  };

  const handleAddEmployee = async () => {
    const formattedDateOfBirth = formatDate(dateofbirth);
    const formattedJoiningDate = formatDate(joiningDate);
    
    
    const salaryNumber = parseFloat(salary);

    const employeeData = {
      fullname,
      employeeid,
      designation,
      mobileno: mobile, 
      dateofbirth: formattedDateOfBirth,
      joiningdate: formattedJoiningDate,
      salary: salaryNumber,
      address,
      
    };

    try {
      const response = await fetch('http://localhost:9000/addemployee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employeeData),
      });
      
      const result = await response.json();
      console.log(result);
      
      if (response.ok) {
        console.log('Employee added:', employeeData);
        router.push('/viewemployee'); 
      } else {
        console.error('Error:', result);
      }
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Add a New Employee</Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        <View style={{ padding: 10, marginBottom: 9 }}>
          <Text style={labelStyle}>Fullname</Text>
          <TextInput
            style={inputStyle}
            placeholder="Enter your name"
            placeholderTextColor={'black'}
            value={fullname}
            onChangeText={setFullname}
          />
        </View>
      </View>

      <View style={{ padding: 10 }}>
        <Text style={labelStyle}>Employee Id</Text>
        <TextInput
          style={inputStyle}
          placeholder="Employee Id"
          placeholderTextColor={'black'}
          value={employeeid}
          onChangeText={setEmployeeId}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={labelStyle}>Designation</Text>
        <TextInput
          style={inputStyle}
          placeholder="Designation"
          placeholderTextColor={'black'}
          value={designation}
          onChangeText={setDesignation}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={labelStyle}>Mobile Number</Text>
        <TextInput
          style={inputStyle}
          placeholder="Mobile No"
          placeholderTextColor={'black'}
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={labelStyle}>Date of Birth</Text>
        <TextInput
          style={inputStyle}
          placeholder="Enter Date of Birth (YYYY-MM-DD)"
          placeholderTextColor={'black'}
          value={dateofbirth}
          onChangeText={setDob}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={labelStyle}>Joining Date</Text>
        <TextInput
          style={inputStyle}
          placeholder="Joining Date (YYYY-MM-DD)"
          placeholderTextColor={'black'}
          value={joiningDate}
          onChangeText={setJoiningDate}
        />
      </View>

     

      <View style={{ padding: 11 }}>
        <Text style={labelStyle}>Salary</Text>
        <TextInput
          style={inputStyle}
          placeholder="Enter Salary"
          placeholderTextColor={'black'}
          keyboardType="numeric"
          value={salary}
          onChangeText={setSalary}
        />
      </View>

      <View style={{ padding: 11 }}>
        <Text style={labelStyle}>Address</Text>
        <TextInput
          style={inputStyle}
          placeholder="Enter Address"
          placeholderTextColor={'black'}
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <Pressable
        style={{
          backgroundColor: '#ABCABA',
          padding: 28,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}
        onPress={handleAddEmployee}
      >
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Add Employee</Text>
      </Pressable>

      <View />
    </ScrollView>
  );
};

export default Adddetails;

const inputStyle = {
  padding: 17,
  borderColor: '#D0D0D0',
  borderWidth: 1,
  marginTop: 10,
  borderRadius: 5,
};

const labelStyle = {
  fontSize: 17,
  fontWeight: 'bold',
};

const styles = StyleSheet.create({});
