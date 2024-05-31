import React from 'react';
import { View , StyleSheet, Image, onPress, TouchableHighlight} from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function ListItem({ title, subTitle, image, onPress, renderRightActions, ImageComponent}) {
  return (
    <GestureHandlerRootView>
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight 
    underlayColor={colors.lightgrey}
    onPress={onPress}>
   <View style={styles.container}>
   {ImageComponent}

    {image && <Image style={styles.image} source={image}/>}
    <View style={styles.detailsContainer}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
    </View>
   </View>
   </TouchableHighlight>
   </Swipeable>
   </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    padding: 15,
    backgroundColor: colors.white
  },
  image:{
    width:70,
    height:70,
    borderRadius:35,
   
  },
  title:{
    fontWeight:"bold"
  },
  subTitle:{
    color:"#6e6969"
  },
  detailsContainer:{
    marginLeft:10
  }
});
export default ListItem;