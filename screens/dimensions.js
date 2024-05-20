import { Dimensions, View, Text, SafeAreaView, Button, StyleSheet , Alert} from 'react-native'
import React from 'react'

const App = () => {
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
     <View style={{backgroundColor: "blue" ,
     width: "50%",
     height: 70,
     }}>
      

     </View>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  container: {
  
  flex:1,
  justifyContent:"center",
  alignItems: "center",
  backgroundColor: "#fff",
  
  }
  
  
  })
export default App