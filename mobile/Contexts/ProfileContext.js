import React, { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from '../utility/axiosInstance';  // Adjust the import path as needed

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/users');
      setProfiles(response.data);
    } catch (err) {
      setError(err);
      console.error('Error fetching profiles:', err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

      // Get profiles by userID
    const getProfilesByUserID = (userID) => {
        return profiles.filter(profile => profile.UserID === userID)[0];
    };

  const addProfile = async (newProfile) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/users', newProfile);
      setProfiles(prevProfiles => [...prevProfiles, response.data]);
      await fetchProfiles();

    } catch (err) {
      setError(err);
      console.error('Error adding profile:', err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  const putProfile = async (newProfile, ProfileID) => {
    setLoading(true);
    try {
      const response = await axiosInstance.put('/users/'+ProfileID, newProfile);
      await fetchProfiles();
    } catch (err) {
      setError(err);
      console.error('Error updating profile:', err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  const getProfile = (userID) => {
    return profiles.find(profile => profile.UserID === userID);
  };

  const getProfileID = (userID) => {
    const profile = profiles.find(profile => profile.UserID === userID);
    return profile ? profile.ProfileID : null;
  };

  const isProfileExist = (userID) => {
    return profiles.some(profile => profile.UserID === userID);
  };

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        loading,
        error,
        fetchProfiles,
        addProfile,
        putProfile,
        getProfile,
        getProfileID,
        isProfileExist,
        getProfilesByUserID
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
