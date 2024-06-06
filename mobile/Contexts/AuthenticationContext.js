import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../utility/axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUserID(JSON.parse(userData).user.UserID);
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (Email, Password) => {
    try {
      const response = await axiosInstance.post('/login', { Email, Password });
      console.log(response)
      if (response.status === 200) {
        const user = response.data;
        console.log(user)
        setUserID(user.UserID);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        return { success: true };
      }
    } catch (error) {
      console.error(error);
      return { success: false, error: 'Login failed. Please check your email and password.' };
    }
  };

  const logout = async () => {
    setUserID(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ UserID, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
