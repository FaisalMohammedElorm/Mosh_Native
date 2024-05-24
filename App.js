import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ViewScreen from './screens/ViewScreen'
import MessagesScreen from './screens/MessagesScreen'

const App = () => {
  return (
    <View style={styles.container}>
    <MessagesScreen/>
    </View>
  )
}
const styles = StyleSheet.create({
 
});
export default App