import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import colors from './config/colors';

function Button(props) {
  return (
    <View style={styles.container}>
    <TouchableOpacity 
    style={styles.button} 
    onPress={() => console.log("Clicked")}>
    
      <Text style={styles.text}>Login</Text>

    
    </TouchableOpacity>
      
    </View>
    
  );
}
const styles = StyleSheet.create({
  button:{
    backgroundColor: colors.primary,
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
    padding:15,
    width:"100%",
    
  },
  text:{
    color:colors.white,
    fontSize:18,
    textTransform:"uppercase",
    fontWeight:"bold",
  },
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  }
});
export default Button;