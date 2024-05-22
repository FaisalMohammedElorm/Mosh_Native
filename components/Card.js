import React from 'react';
import { View, StyleSheet , Image} from 'react-native';


import AppText from './AppText';
function Card({title, subTitle, image}) {
  return (
   <View 
   style={styles.card}
   >
    <Image style={styles.image} source={image}/>
    <View style={styles.detailsContainer}>

    <AppText style={styles.title}>{title}</AppText>
    <AppText style={styles.subtitle}>{subTitle}</AppText>
    </View>
   </View>
  );
}
const styles = StyleSheet.create({
  card:{
    borderRadius:100,
    backgroundColor:"white",
    marginBottom: 20,
    padding:20,
    top:60,
    overflow:"hidden",
  },
  detailsContainer:{
    padding:20
  },
   image:{
   width:"100%",
   height:200,
   alignSelf:"center",
  },
  title:{
     marginBottom:7 ,
  },
  subtitle:{
     color:"red",
     fontWeight:"800"
  }
});
export default Card;