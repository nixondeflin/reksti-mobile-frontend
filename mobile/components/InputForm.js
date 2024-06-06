import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputForm = ({ text, value, onChangeText, numLines = 1, multiline = true, error }) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
      <View style={[styles.textInputContainer, error && styles.errorContainer]}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          numberOfLines={numLines}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 5,
    fontWeight: 'bold',
  },
  textInputContainer: {
    padding: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 7,
  },
  textInput: {
    // Add text input styles here
  },
  errorContainer: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default InputForm;
