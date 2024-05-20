import { View, Text, Image , StyleSheet} from 'react-native';
import React from 'react';

import colors from './config/colors';
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
    backgroundColor:colors.black,
    flex:1,
  },
  closeIcon:{
    width:70,
    height:50,
    backgroundColor:colors.primary,
    position:"absolute",
    top:40,
    left:30,
  },
  deleteIcon:{
    width:70,
    height:50,
    backgroundColor:colors.secondary,
    position:"absolute",
    top:40,
    right:30,
  }
});
export default App