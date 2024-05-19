import { View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native'
import React from 'react'

const App = () => {
const handlePress = () => console.log("Text clicked")

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={() => console.log(handlePress)}>I really wanna learn a whole lot of stuff but a lot of stuff aren't favouring me now like accommodation challenges for instance;the thing is, no more room for excuses anymore.</Text>
      <TouchableHighlight onPress={() => console.log("Image Tapped")}>
      <Image source={{uri:"https://picsum.photos/seed/picsum/200/300"}} style={styles.icon} blurRadius={5}/>
      </TouchableHighlight>
      <Image source={require("./assets/icon.png")} style={styles.icon}/>
      
    </View>
  )
}
const styles = StyleSheet.create({
container: {

flex:1,
justifyContent:"center",
alignItems: "center",
backgroundColor: "#fff",

},
icon: {
  width: 300,
  height:300,
  
}

})
export default App