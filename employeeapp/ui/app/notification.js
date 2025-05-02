import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, FlatList } from 'react-native';

const LeaveRequestsScreen = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  // Fetch leave requests when the component mounts
  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const fetchLeaveRequests = async () => {
    try {
      const response = await fetch('http://localhost:9000/leave');
      const data = await response.json();
      setLeaveRequests(data);
    } catch (error) {
      console.error('Error fetching leave requests:', error);
    }
  };

  const handleApproveLeave = async (leaveId) => {
    try {
      const response = await fetch(`http://localhost:9000/leave/status/${leaveId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'Approved' }),
      });

      const data = await response.json();
      console.log('Leave Approved:', data);

      if (response.ok) {
        Alert.alert('Success', 'Leave Approved');
        fetchLeaveRequests(); 
      } else {
        Alert.alert('Error', 'Failed to approve leave');
      }
    } catch (error) {
      console.error('Error approving leave:', error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  const handleRejectLeave = async (leaveId) => {
    try {
      const response = await fetch(`http://localhost:9000/leave/status/${leaveId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'Rejected' }),
      });

      const data = await response.json();
      console.log('Leave Rejected:', data);

      if (response.ok) {
        Alert.alert('Success', 'Leave Rejected');
        fetchLeaveRequests(); // Refresh the list after updating the status
      } else {
        Alert.alert('Error', 'Failed to reject leave');
      }
    } catch (error) {
      console.error('Error rejecting leave:', error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Leave Requests</Text>
      <FlatList
        data={leaveRequests}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.leaveItem}>
            <Text>Employee ID: {item.employeeId}</Text>
            <Text>Leave Type: {item.leaveType}</Text>
            <Text>Status: {item.status}</Text>
            <Button
              title="Approve"
              onPress={() => handleApproveLeave(item._id)}
              color="green"
            />
            <Button
              title="Reject"
              onPress={() => handleRejectLeave(item._id)}
              color="red"
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f4ff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
    textAlign: 'center',
  },
  leaveItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default LeaveRequestsScreen;
