import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Carousel from "../Components/Carousel";
import List from "../Components/List";
import { Container } from "../Components/Container";
import { Context } from "../context/PhonesContext";
import { Context as Extras } from "../context/ExtrasContext";
import { Context as Headphones } from "../context/HeadphonesContext";
import Loader from "../Components/Loader";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const { state, getPhones } = useContext(Context);
  const { state: extra, getExtras } = useContext(Extras);
  const { state: headphones, getHeadphones } = useContext(Headphones);
  const [loading, isLoading] = useState(false);

  // state ? isLoading(false) : isLoading(true)
  // console.log(loading)

  useEffect(() => {
    getPhones();
    getExtras();
    getHeadphones();
  }, []);

  return (
    <Container>
      {/* <Loader /> */}
      <ScrollView>
        <View style={{
            padding: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            Welcome Back, Kurtis Weissnat
          </Text>
        </View>
        <View style={styles.carousel}>
        <View style={styles.iconContainer}>
        <Text style={styles.headingText}>Top Trending</Text>
        <Ionicons name="trending-up-outline" style={{ fontSize: 22, color: "#FF6E00" }} />
        </View>
          <Carousel data={state} />
        </View>
        <View style={styles.list}>
          <List state={state} heading="Hotest Deals" name='flame-outline' />
          <List state={extra} heading="Smart Watches" name='watch-outline' />
          <List state={headphones} heading="Trending Headphones" name='headset-outline' />
        </View>
        <View
          style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
        >
          <Text style={{ color: "#767676" }}>v.1.0.0</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  headingText: {
    color: "#FF6E00",
    fontWeight: "bold",
    fontSize: 22,
    padding: 10
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center'
  },
});

export default HomeScreen;
