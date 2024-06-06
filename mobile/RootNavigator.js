import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from './Contexts/AuthenticationContext'; // Adjust the path as necessary

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import ProfileScreen from './pages/ProfileScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import UnderDev from './pages/UnderDev';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="UnderDev" component={UnderDev} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

const RootNavigator = () => {
  const { userID, loading } = useAuth();

  if (loading) {
    // You can return a loading indicator here if needed
    return null;
  }

  return (
    <NavigationContainer>
      {userID ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
