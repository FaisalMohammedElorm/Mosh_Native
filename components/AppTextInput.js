import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from './Icon';
import AppText from './AppText';
import defaultStyles from "../config/styles"
function AppTextInput({icon, ...otherProps}) {
  return (
    
    <View style={styles.container}> 
    {icon && <MaterialCommunityIcons 
        name ={icon} 
        size={29} 
        color={colors.black}
        style={styles.icon}
        />
        }
       <TextInput style={defaultStyles.text}
        {...otherProps}
       />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.lightgrey,
    borderRadius: 20,
    flexDirection:"row",
    width:"100%",
    padding:20,
    marginVertical: 10,
    
  
  },
  icon: {
    marginRight:10,


  },
 
});
export default AppTextInput;