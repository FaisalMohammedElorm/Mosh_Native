import { View, Text, SafeAreaView, Button, StyleSheet , Alert} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={containerStyle}>
      <Button 
      color={"orange"}
      title="Click Me" onPress={() => Alert.prompt("My title", "My message", text => console.log(text))}/>
    </SafeAreaView>
  )
};
const containerStyle = {backgroundColor: "red"};

const styles = StyleSheet.create({
  container: {
  
  flex:1,
  justifyContent:"center",
  alignItems: "center",
  backgroundColor: "#fff",
  
  }
  
  
  })
export default App