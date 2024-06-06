import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RadioButton = ({ selected, onPress, label, imagePath }) => {
  const imageSource = images[imagePath];

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.radio, selected && styles.selectedRadio]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      {imageSource && <Image source={imageSource} style={styles.image} />}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const images = {
    'image1': require('../assets/template1.png'),
    'image2': require('../assets/template2.png'),
    // Add more images as needed
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0083db',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRadio: {
    borderColor: '#0083db',
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#0083db',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
  },
});

export default RadioButton;
