import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, onPress } from 'react-native';
import colors from '../config/colors';
import { FontAwesome6 } from '@expo/vector-icons';
function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>

    <View style={styles.container}>
    <FontAwesome6 name="trash-can" size={35} color="white" />

    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.danger,
    width:70,
    justifyContent:"center",
    alignItems:"center"

  }
});
export default ListItemDeleteAction;