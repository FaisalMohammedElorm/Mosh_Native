import React from 'react';
import Constants from "expo-constants"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, FlatList, Button, Alert, SafeAreaView } from 'react-native';
function Screen({children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
    {children}

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen:{
    paddingTop: Constants.statusBarHeight,
    flex: 1
    
  }
});
export default Screen;