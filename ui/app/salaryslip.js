import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';

const SalarySlip = () => {
  const [salarySlip, setSalarySlip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [employeename, setEmployeeName] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  const fetchSalarySlip = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:9000/salary/generate/${employeename}/${month}/${year}`);
      const data = await response.json();
      if (response.ok) {
        setSalarySlip(data.slip);
      } else {
        setError('Error fetching salary slip.');
      }
    } catch (error) {
      setError('Failed to fetch salary slip. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!employeename || !month || !year) {
      setError('Please fill in all fields.');
      return;
    }
    fetchSalarySlip();
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Generate Salary Slip</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Employee Name"
        value={employeename}
        onChangeText={setEmployeeName}
      />
      <TextInput
        style={styles.input}
        placeholder="Month (e.g., 4)"
        keyboardType="numeric"
        value={month}
        onChangeText={setMonth}
      />
      <TextInput
        style={styles.input}
        placeholder="Year (e.g., 2025)"
        keyboardType="numeric"
        value={year}
        onChangeText={setYear}
      />

      <Button 
        title="Generate Salary Slip" 
        onPress={handleSubmit} 
        color="#4CAF50" 
      />

      {error && <Text style={styles.error}>{error}</Text>}

      {salarySlip && (
        <View style={styles.card}>
          <Text style={styles.resultHeading}>Salary Slip - {salarySlip.month}/{salarySlip.year}</Text>
          <Text>Employee Name: {salarySlip.employeeName}</Text>
          <Text>Base Salary: ₹{salarySlip.baseSalary}</Text>
          <Text>Approved Leaves: {salarySlip.approvedLeaves}</Text>
          <Text>Excess Leaves: {salarySlip.excessLeaves}</Text>
          <Text>Total Deduction: ₹{salarySlip.totalDeduction.toFixed(2)}</Text>
          <Text style={styles.finalSalary}>Final Salary: ₹{salarySlip.finalSalary.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#f5f5f5',
    marginTop: 20,
  },
  resultHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  finalSalary: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default SalarySlip;
