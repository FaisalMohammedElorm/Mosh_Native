import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import Card from './components/Card'
import AppText from './components/AppText'


const App = () => {
  return (
    <View style={styles.container}>
      <Card 
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./assets/jacket.jpg")}
       />
    </View>
  )
}
const styles = StyleSheet.create({
  
});
export default App 