import { View, Text, StyleSheet, TextInput, Switch } from 'react-native'
import React, {useState} from 'react'
import AppText from './components/AppText'
import Screen from './components/Screen'
import AppTextInput from './components/AppTextInput'


const App = () => {
  const [isNew, setIsNew] = useState(false);
  
  return (
    <Screen>
      <Switch 
        value={isNew} 
          onValueChange={ (newValue) => setIsNew(newValue)}

          />
    </Screen>    
  )
}
const styles = StyleSheet.create({
 
});
export default App