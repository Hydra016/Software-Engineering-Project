import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Carousel from "../Components/Carousel";
import List from "../Components/List";
import { Container } from "../Components/Container";
import { Context } from "../context/PhonesContext";

const HomeScreen = ({ navigation }) => {
  const { state, getPhones } = useContext(Context);

  useEffect(() => {
    getPhones()
  },[]);

  return (
    <Container>
      <View style={styles.carousel}>
        <Carousel data={state} />
      </View>
      <View style={styles.list}>
        <List />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  carousel: {
    height: "50%",
  },
  list: {
    height: "50%",
    padding: 20,
  },
});

export default HomeScreen;
