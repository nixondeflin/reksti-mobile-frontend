import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const Button1 = ({ text, onPress, backgroundColor = '#008edb',color='#ffffff',borderColor='#008edb',borderWidth=1, textAlign='left'}) => {

  return (
    <Pressable style={[styles.button, { backgroundColor,borderColor,borderWidth }]} onPress={onPress}>
      <Text style={[styles.buttonText,{color, textAlign}]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
    paddingHorizontal:16,
    paddingVertical:8,
  },
  buttonText: {
    fontWeight: '700',
    fontSize:15
  }
});

export default Button1;
