import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import { FlatList, StyleSheet, View } from 'react-native'
import colors from '../config/colors';
import Icon from '../components/Icon';
import Separator from '../components/Separator';


const menuItems = [
  {
  title: "My Listings",
  icon: {
    name: "format-list-bulleted",
    backgroundColor: colors.primary
  }
},
  {
  title: "My Messages",
  icon: {
    name: "email",
    backgroundColor: colors.secondary
  }
}
]
function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
    
      <ListItem
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
        image={require("../assets/mosh.jpg")}
      />
      
      <View style={styles.container}>
        <FlatList 
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) => 
            <ListItem 
              title={item.title}
              ImageComponent={
                <Icon name={item.icon.name} 
                backgroundColor={item.icon.backgroundColor}
                />
              }
            /> }
        />
      </View>
      <ListItem
        title="Log Out"
        ImageComponent={
          <Icon name="logout" backgroundColor="#ffe66d" 
          />
          
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container:{
    marginBottom:300
  },
  screen:{
    backgroundColor: colors.lightgrey
  }
});
export default AccountScreen;