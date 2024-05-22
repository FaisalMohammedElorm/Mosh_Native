import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      
      <View style={{
        backgroundColor: 'red',
        width: 100,
        height:100,
        padding:20, 
        paddingHorizontal:10,
        paddingLeft:30, 
      }}>
      <View style={{
        backgroundColor:"gold",
        width:50,
        height:50


      }}></View>
      </View>
      <View style={{
        backgroundColor: 'tomato',
        width:100,
        height:100,
        margin:20,
      }}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{ 
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  }
});

export default App