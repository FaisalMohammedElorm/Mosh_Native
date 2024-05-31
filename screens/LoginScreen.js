import React from 'react';
import { StyleSheet, Image, onPress } from 'react-native';
import { Formik } from "formik";
import Screen from "../components/Screen.js";
import AppTextInput from '../components/AppTextInput.js';
import Button from '../components/Button.js';
function LoginScreen(props) {
  
  return (
    <Screen>
    <Image 
       style={styles.logo}
       source={require("../assets/logo-red.png")}/>
       {/** Formik Section */}
       <Formik 
       initialValues={{ email: "", password:""}}
       onSubmit={ (values) => console.log(values)}
       >
       {( {  handleChange, handleSubmit }) => (
        <>
        <AppTextInput
        icon="email"
        placeholder="Email"
        autoCapitalize = "none"
        autoCorrect = {false}
        keyboardType = "email-address"
        onChangeText = {handleChange("email")}
        textContentType = "emailAddress"
       />
       <AppTextInput
        autoCapitalize = "none"
        autoCorrect = {false}
        icon="lock"
        onChangeText = {handleChange("password")}
        placeholder="Password"
        textContentType = "password"
        secureTextEntry 
       />
       <Button 
       title ="Login" 
       onPress={handleSubmit}

       />



        </>
       ) }

       </Formik>
       
       
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo:{
    width:80,
    height:80,
    alignSelf:"center",
    marginTop: 50,
    marginBottom: 20
  }
});
export default LoginScreen;