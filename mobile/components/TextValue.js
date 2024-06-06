import { StyleSheet, Text, TextInput, View, ViewBase } from "react-native"

const TextValue = ({children,header,textAlign,...props}) => {
  return (
    <View>
      <Text style={[styles.text,{textAlign}]}>{header}</Text>
      <View style={styles.textInputContainer}>
       <Text style={[styles.textInput]} {...props}>{children}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    padding:5,
    fontWeight:'bold',
    fontSize:18,
  },
  textInputContainer:{
    // margin:10,
    padding:5,
    paddingLeft:10,
    borderRadius:7,
    fontSize:11,
  },
  textInput: {
  },
});

export default TextValue