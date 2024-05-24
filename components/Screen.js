import React from 'react';
import Constants from "expo-constants"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, FlatList, Button, Alert, SafeAreaView } from 'react-native';
function Screen({children}) {
  return (
    <SafeAreaView style={styles.screen}>
    {children}

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen:{
    paddingTop: Constants.statusBarHeight
  }
});
export default Screen;