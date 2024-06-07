import React, {  useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axiosInstance from '../utility/axiosInstance';
import { AuthContext, useAuth } from '../Contexts/AuthenticationContext';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login } = useAuth()

  const handleLogin = async () => {
    const result = await login(email, password);

    if (result.success) {
      Alert.alert('Success', 'Login successful!', [
        { text: 'OK', onPress: () => navigation.navigate('Home') }
      ]);
    } else {
      Alert.alert('Error', result.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Starts your new journey</Text>
        <Text style={[styles.subtitle, styles.bold]}>with Rumahku!</Text>
      </View>

      <Text style={styles.label}>Email :</Text>
      <TextInput
        style={styles.input}
        placeholder="johndoe@gmail.com"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password :</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="*******"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
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

      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signup}>Sign Up</Text>
      </Pressable>

      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
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
    fontSize: 56,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    alignSelf: 'flex-start', // Align text to the left
  },
  subtitleContainer: {
    marginBottom: 30,
    alignSelf: 'flex-start', // Align text to the left
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
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
  },
  passwordToggle: {
    padding: 10,
  },
  signup: {
    color: '#fff',
    textDecorationLine: 'underline',
    marginBottom: 60,
  },
  loginButton: {
    width: '70%',
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;