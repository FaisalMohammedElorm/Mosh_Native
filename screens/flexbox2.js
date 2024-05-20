import { View, Text } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{
      backgroundColor: "#fff" , 
      flex: 1, 
      flexDirection:"row",
      justifyContent: "center",
      alignItems:"baseline",
      alignContent:"center",
      flexWrap: "wrap"
      }}>
      <View style={{
        backgroundColor:"blue", 
        width:100, 
        height:100
        }}/>
      <View style={{
        backgroundColor:"gold", 
        width:100, 
        height:100
        }}/>
      <View style={{
        backgroundColor:"grey", 
        width:100, 
        height:100
        }}/>
      <View style={{
        backgroundColor:"greenyellow", 
        width:100, 
        height:100
        }}/>
    </View>
  )
}

export default App