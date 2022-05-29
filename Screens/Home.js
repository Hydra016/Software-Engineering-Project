import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Carousel from "../Components/Carousel";
import List from "../Components/List";

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.carousel}>
        <Carousel />
        </View>
        <View style={styles.list}>
        <List />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8fcbbc',
    width: '100%',
    height: '100%',
  },
  main: {
    marginTop: 30
  },
  carousel: {
    height: '60%',
    borderWidth: 1,
    borderColor: 'black'
  },
  list: {
    
  }
});

export default HomeScreen;