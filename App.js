import { View, Text, Image , StyleSheet} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
      resizeMode='contain'
      style={styles.image} 
      source={require("./assets/herbs.jpg")} 

      />
    </View>
  )
}
const styles = StyleSheet.create({
  image:{
    width:"100%",
    height:"100%",
  },
  container:{
    backgroundColor:"#000",
    flex:1,
  },
  closeIcon:{
    width:70,
    height:50,
    backgroundColor:"red",
    position:"absolute",
    top:40,
    left:30,
  },
  deleteIcon:{
    width:70,
    height:50,
    backgroundColor:"yellow",
    position:"absolute",
    top:40,
    right:30,
  }
});
export default App