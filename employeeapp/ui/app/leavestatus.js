import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const LeaveStatusScreen = () => {
  const [leaveApplications, setLeaveApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeaveStatus = async () => {
    try {
      const response = await fetch('http://localhost:9000/leave/status/2009'); 
      const data = await response.json();
      setLeaveApplications(data);
    } catch (error) {
      console.error('Error fetching leave status:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaveStatus();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.date}>{item.startDate} to {item.endDate}</Text>
      <Text style={styles.reason}>Reason: {item.reason}</Text>
      <Text style={[styles.status, getStatusStyle(item.status)]}>
        Status: {item.status}
      </Text>
    </View>
  );

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return { color: 'green' };
      case 'rejected':
        return { color: 'red' };
      default:
        return { color: 'orange' }; // Pending
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Leave Applications</Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={leaveApplications}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e6f2ff',
    flex: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: '#aaa',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reason: {
    fontSize: 14,
    marginTop: 4,
  },
  status: {
    fontSize: 16,
    marginTop: 6,
    fontWeight: 'bold',
  },
});

export default LeaveStatusScreen;
