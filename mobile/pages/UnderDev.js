import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UnderDev = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleBackPress} style={styles.backButton}>
        <Image source={require('../assets/icon/back.png')} style={styles.icon} />
      </Pressable>
      <Text style={styles.text}>Under Development</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 24,
    color: '#333',
    fontWeight:'bold',
  },
});

export default UnderDev;
