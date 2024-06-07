import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from '../components/Navigation';

const EmergencyScreen = () => {
  const [isEmergency, setIsEmergency] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [dots, setDots] = useState('');
  const flashAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let interval;
    if (isEmergency) {
      startFlashing();
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
        setDots(prevDots => (prevDots.length < 3 ? prevDots + '.' : ''));
      }, 1000);
    } else {
      stopFlashing();
      setSeconds(0);
      setDots('');
      clearInterval(interval);
    }

    return () => clearInterval(interval);
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
      ]),
    ).start();
  };

  const stopFlashing = () => {
    flashAnimation.stopAnimation(() => {
      flashAnimation.setValue(0); // Reset to the initial value
    });
  };

  const handleEmergencyPress = () => {
    if (isEmergency) {
      Alert.alert(
        "End Emergency",
        "Apakah situasi darurat sudah berakhir?",
        [
          {
            text: "Tidak",
            style: "cancel",
          },
          {
            text: "Ya",
            onPress: () => setIsEmergency(false),
          },
        ],
        { cancelable: false }
      );
    } else {
      setIsEmergency(true);
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
        {isEmergency && (
          <>
            <Text style={[styles.callingText, { color: 'black' }]}>Calling{dots}</Text>
            <Text style={[styles.timerText, { color: 'black' }]}>{new Date(seconds * 1000).toISOString().substr(14, 5)}</Text>
          </>
        )}
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
  callingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default EmergencyScreen;
