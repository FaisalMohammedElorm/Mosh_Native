import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, Text, TouchableWithoutFeedback, onPress, Modal, Button, FlatList } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from './Icon';
import AppText from './AppText';
import defaultStyles from "../config/styles";
import Screen from './Screen';
import PickerItem from './PickerItem';
function Picker({icon, placeholder, items}) {
  const [ modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
    <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
    
    <View style={styles.container}> 
    {icon && <MaterialCommunityIcons 
        name ={icon} 
        size={29} 
        color={colors.black}
        style={styles.icon}
        />
        }
      <Text style={styles.text}>{placeholder}</Text>
      <MaterialCommunityIcons 
        name = "chevron-down"
        size={29} 
        color={colors.black}
         
        />
       
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType='slide'>
    <Screen>
      <Button title="Close"
        onPress={() => setModalVisible(false)}
      />
      <FlatList
        data={items}
        keyExtractor={item => item.value.toString()}
        renderItem={({ item }) => 
         <PickerItem
           label={item.label}
            onPress={() => console.log(item)}
         />}
      />

      </Screen>
    </Modal>
    </React.Fragment>
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
  text:{
    fontSize:23,
    flex:1
  }

 
});
export default Picker;