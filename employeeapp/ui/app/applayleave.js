import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const ApplyLeaveScreen = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [reason, setReason] = useState('');

  const handleApplyLeave = async () => {
    if (!employeeId || !leaveType || !fromDate || !toDate || !reason) {
      Alert.alert('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:9000/leave/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          employeeId,
          leaveType,
          startDate: fromDate,
          endDate: toDate,
          reason,
        }),
      });

      const data = await response.json();
      console.log('Response:', data);

      if (response.ok) {
        Alert.alert('Leave Applied Successfully');
        // Clear the fields
        setEmployeeId('');
        setLeaveType('');
        setFromDate('');
        setToDate('');
        setReason('');
      } else {
        Alert.alert('Error', data.message || 'Failed to apply leave');
      }
    } catch (error) {
      console.error('Error submitting leave request:', error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Apply for Leave</Text>

        <Text style={styles.label}>Employee ID</Text>
        <TextInput
          style={styles.input}
          value={employeeId}
          onChangeText={setEmployeeId}
          placeholder="Enter your Employee ID"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>Leave Type</Text>
        <TextInput
          style={styles.input}
          value={leaveType}
          onChangeText={setLeaveType}
          placeholder="Casual, Sick, etc."
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>From Date (YYYY-MM-DD)</Text>
        <TextInput
          style={styles.input}
          value={fromDate}
          onChangeText={setFromDate}
          placeholder="2025-05-01"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>To Date (YYYY-MM-DD)</Text>
        <TextInput
          style={styles.input}
          value={toDate}
          onChangeText={setToDate}
          placeholder="2025-05-05"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>Reason</Text>
        <TextInput
          style={styles.input}
          value={reason}
          onChangeText={setReason}
          placeholder="Enter reason for leave"
          placeholderTextColor="#888"
        />

        <View style={styles.buttonContainer}>
          <Button title="Apply Leave" onPress={handleApplyLeave} color="green" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f0f4ff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ApplyLeaveScreen;
