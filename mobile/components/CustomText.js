import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Define the CustomText component
const CustomText = ({ children, color, fontSize, style, fontWeight,textAlign, padding, ...props }) => {
  return (
    <Text
      style={[styles.text, { color: color, fontSize: fontSize,fontWeight:fontWeight, textAlign:textAlign,padding:padding }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'System', // You can set the default font family
    fontSize: 16, // Default font size
    color: 'black', // Default text color
  },
});

export default CustomText;
