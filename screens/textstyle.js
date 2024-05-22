import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>I love React Native! This is my First React Native App! Here's Some More Text.
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{ 
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    fontSize:30,
    fontFamily: "Courier",
    fontStyle:"italic",
    fontWeight:"600",
    color:"tomato",
    textTransform:"capitalize",
    textAlign:"center",
    lineHeight:50
  },
});

export default App