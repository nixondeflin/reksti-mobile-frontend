import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Role = ({children, ...props}) => {
  return (
    <View style={styles.containerText}>
        <Text style={styles.text} {...props}>
            {children}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    containerText:{
        backgroundColor:'#dedede',
        borderRadius:24,
        paddingHorizontal:15,
        paddingVertical:5,
    },
    text: {
      fontSize: 10, 
      color: '#737373', 
    },
  });

export default Role