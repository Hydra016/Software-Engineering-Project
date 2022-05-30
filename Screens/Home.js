import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Carousel from "../Components/Carousel";
import List from "../Components/List";
import { Container } from "../Components/Container";

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.carousel}>
        <Carousel />
        </View>
        <View style={styles.list}>
        <List />
        </View>
      </Container>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8fcbbc',
    width: '100%',
    height: '100%',
  },
  carousel: {
    height: '50%',
  },
  list: {
    height: '50%',
    padding: 20
  }
});

export default HomeScreen;