import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from '../components/Navigation';
import axiosInstance from '../utility/axiosInstance'; // Make sure the path is correct
import { useAuth } from '../Contexts/AuthenticationContext'; // Import useAuth to get userID

const EmergencyScreen = () => {
  const { userID } = useAuth(); // Get userID from authentication context
  const [isEmergency, setIsEmergency] = useState(false);
  const [flashAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    let timeout;
    if (isEmergency) {
      startFlashing();
      timeout = setTimeout(() => {
        setIsEmergency(false);
      }, 5000); // Automatically revert to normal after 5 seconds
    } else {
      stopFlashing();
    }

    return () => clearTimeout(timeout);
  }, [isEmergency]);

  const startFlashing = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(flashAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(flashAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  const stopFlashing = () => {
    flashAnimation.stopAnimation(() => {
      flashAnimation.setValue(0); // Reset to the initial value
    });
  };

  const handleEmergencyPress = async () => {
    setIsEmergency(true);
    try {
      const userResponse = await axiosInstance.get(`/users/${userID}`);
      const user = userResponse.data;
      await axiosInstance.post('/emergencies', { UserID: userID, emergency: true });
      console.log('Emergency activated');
    } catch (error) {
      console.error('Failed to send emergency request:', error);
    }
  };

  const backgroundColor = flashAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', '#B93737'],
  });

  return (
    <Animated.View style={[styles.containerScreen, { backgroundColor }]}>
      <Text style={[styles.title, { color: 'black' }]}>Emergency Button</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleEmergencyPress}>
          <Icon name="alert" size={150} color="#fff" />
        </TouchableOpacity>
      </View>
      <Navigation />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: 'white', // Default background color
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  button: {
    width: 250,
    height: 250,
    borderRadius: 150,
    backgroundColor: '#CB5656',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});

export default EmergencyScreen;
