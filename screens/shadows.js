import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      
      <View style={{
        backgroundColor: 'red',
        width: 100,
        height:100,
        shadowColor:"grey",
        shadowOffset:{ width: 0, height: 10},
        shadowOpacity: 1,
        shadowRadius:10,
        elevation:20,
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