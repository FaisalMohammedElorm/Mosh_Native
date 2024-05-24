import { View, Text, Image , StyleSheet} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import colors from '../config/colors';
const ViewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
      <AntDesign name="close" size={34} color="white" />
      </View>
      <View style={styles.deleteIcon}>
      <Entypo name="trash" size={34} color="white" />

      </View>
      <Image
      resizeMode="contain"
      style={styles.image} 
      source={require('../assets/herbs.jpg')} 

      />
    </View>
  )
}
const styles = StyleSheet.create({
  image:{
    width:"100%",
    height:"100%",
    position: "absolute",
    
    
  },
  container:{
    backgroundColor:colors.black,
    flex:1,
    
  },
  closeIcon:{
    
    position:"absolute",
    top:40,
    left:30,
  },
  deleteIcon:{
   
    position:"absolute",
    top:40,
    right:30,
  }
});
export default ViewScreen