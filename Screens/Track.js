import React, { useContext, useEffect} from "react";
import { View, Text, StyleSheet, Button, ScrollView, Dimensions } from "react-native";
import { Container } from "../Components/Container";
import { Context } from "../context/CartContext";
import List from "../Components/List";
import ProfileDetails from "../Components/ProfileDetails";
import Footer from "../Components/Footer";

const { height, width } = Dimensions.get("window");

const TrackScreen = ({ navigation }) => {
  const { state, getCartItems } = useContext(Context);

  useEffect(() => {
    getCartItems();
  }, [])

  console.log(state)

  return (
    <Container>
      <ScrollView style={{ padding: 10 }}>
      <Text style={styles.heading}>Track Your Items</Text>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 20}}>
        <Text>Total Items Delivered</Text>
        <Text>0</Text>
      </View>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Items In Delivery</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      >
        {
          state.map(el => {
            return (
              <ProfileDetails title={el.obj.title} image={el.obj.mainImg} icon='smartphone' />
            )
          })
        }
      </ScrollView>
      <View style={{ marginTop: 142.5 }} >
      <Footer/>
      </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  item: {
    borderWidth: 1,
  }
});

export default TrackScreen;
