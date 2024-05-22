import React from 'react';
import { ImageBackground , StyleSheet, View, Image, Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function WelcomeScreen(props) {
  return (
    <ImageBackground 
    style={styles.background}
    source={require("./assets/greenleaf.jpg"
    )}>
    <View style={styles.logoContainer}>
    <MaterialCommunityIcons 
    name="hand-wave" 
    size={80} 
    color="green" 
    style={styles.logo} />
    <Text style={styles.text}>Sell what you don't need</Text>
    </View>
    
    <View style={styles.loginButton}>

    </View>
    <View style={styles.registerButton}>

    </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems:"center"
  },
  loginButton:{
    width: "100%",
    height: 70,
    backgroundColor: "green"
  },
  registerButton:{
    width: "100%",
    height: 70,
    backgroundColor: "darkgreen",
  }, 
  logo:{
    width:100,
    height:100,
    position:"absolute",
    top:50,
  },
  text:{
    fontSize:25,
    color:"green",
   
  },
  logoContainer:{
    position:"absolute",
    top:50,
    alignItems:"center",
  }
});

export default WelcomeScreen;