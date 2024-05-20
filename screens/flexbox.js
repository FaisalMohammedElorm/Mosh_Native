import { View, Text } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{backgroundColor: "#fff" , flex: 1}}>
      <View style={{backgroundColor:"blue", flex: 2}}/>
      <View style={{backgroundColor:"gold", flex: 1}}/>
      <View style={{backgroundColor:"tomato", flex: 1}}/>
    </View>
  )
}

export default App