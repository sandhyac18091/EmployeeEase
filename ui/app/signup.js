import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const Signup = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSignup = async () => {
    if (!form.name || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:9000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Signup successful');
        router.push('/');
      } else {
        Alert.alert('Error', data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      Alert.alert('Error', 'Could not connect to server');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={form.name}
        onChangeText={(text) => handleChange('name', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => handleChange('email', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={form.password}
        secureTextEntry
        onChangeText={(text) => handleChange('password', text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.loginLink} onPress={() => router.push('/login')}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#333',
  },
  loginLink: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});
