import React, { createContext, useState, useContext, useEffect } from 'react';
import axiosInstance from '../utility/axiosInstance';  // Adjust the import path as needed

// Create a context for user data
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  // Fetch initial user data from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.response ? error.response.data : error.message);
      }
    };

    fetchUsers();
  }, []);

  // Function to add a new user
  const addUser = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  // Function to update a user by UserID
  const updateUser = (updatedUser) => {
    setUsers(prevUsers =>
      prevUsers.map(user => (user.UserID === updatedUser.UserID ? updatedUser : user))
    );
  };

  // Function to delete a user by UserID
  const deleteUser = (userID) => {
    setUsers(prevUsers => prevUsers.filter(user => user.UserID !== userID));
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
