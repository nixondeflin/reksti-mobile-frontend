import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axiosInstance from '../utility/axiosInstance';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const response = await axiosInstance.post('/signup', {
        username,
        email,
        password,
        userType: 'basic' 
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Sign up successful!', [
          { text: 'OK', onPress: () => navigation.navigate('Login') } // Navigate to the Login screen
        ]);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.response?.data?.error || 'Sign up failed.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Text style={styles.label}>Name :</Text>
      <TextInput
        style={styles.input}
        placeholder="John Doe"
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Email :</Text>
      <TextInput
        style={styles.input}
        placeholder="johndoe@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password :</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="***********"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.passwordToggle}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Text>{passwordVisible ? '🙈' : '🙉'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Confirm Password :</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="***********"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.passwordToggle}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Text>{passwordVisible ? '🙈' : '🙉'}</Text>
        </TouchableOpacity>
      </View>

      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.login}>Login</Text>
      </Pressable>

      <Pressable style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#233881',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    alignSelf: 'flex-start', // Align text to the left
  },
  label: {
    alignSelf: 'flex-start',
    color: '#fff',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  inputPassword: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  passwordToggle: {
    padding: 10,
  },
  login: {
    color: '#fff',
    textDecorationLine: 'underline',
    marginBottom: 60,
  },
  signupButton: {
    width: '70%',
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignupScreen;