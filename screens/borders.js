import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      
      <View style={{
        backgroundColor: 'red',
        width: 100,
        height:100,
        borderWidth:10,
        borderColor:"blue",
        borderRadius:10,
        borderTopWidth:20,
        borderTopLeftRadius:50
      }}>

      </View>
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