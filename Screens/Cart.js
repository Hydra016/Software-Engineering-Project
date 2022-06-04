import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
import { Container } from "../Components/Container";
import { Context } from "../context/CartContext";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const CartScreen = () => {
  const { state, getCartItems, deleteCartItem } = useContext(Context);
  useEffect(() => {
    getCartItems();
  }, []);

  // console.log(state)

  if (state !== 0) {
    return (
      <Container>
        <ScrollView style={styles.scrollView}>
          <View style={styles.innerContainer}>
            <Text style={styles.heading}>Cart</Text>
            <FlatList
              keyExtractor={(item) => item.id}
              data={state}
              renderItem={({ item }) => {
                return (
                  <View style={styles.container}>
                    <Image
                      style={styles.img}
                      source={{
                        uri: item.obj.mainImg,
                      }}
                    />
                    <View style={styles.details}>
                      <Text>{item.obj.title}</Text>
                      <Text>{item.obj.memory}</Text>
                      <Text>{item.obj.storage}</Text>
                    </View>
                    <TouchableOpacity onPress={() => deleteCartItem(item.id)}>
                      <Ionicons style={styles.icon} name="ios-trash-outline" />
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
            <TouchableOpacity style={styles.button}>
              <Text>Check Out</Text>
              <MaterialIcons style={styles.icon} name="chevron-right" />
            </TouchableOpacity>
            <View style={styles.extra}></View>
          </View>
        </ScrollView>
      </Container>
    );
  } else if(state.length === 0) {
    return (
      <Container>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Please add some items to the cart
          </Text>
        </View>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
  innerContainer: {
    height: height,
    display: "flex",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    padding: 20,
    backgroundColor: "#ffffff",
    elevation: 2,
    borderRadius: 10,
    width: width - 50,
  },
  img: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  extra: {
    height: 150,
  },
  details: {
    width: 130,
  },
  headingText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    width: 200,
    borderRadius: 15,
    elevation: 2,
  },
  heading: {
    fontSize: 22,
    color: "#fff",
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
  },
  emptyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: height,
  },
  emptyText: {
    color: "#fff",
  },
});

export default CartScreen;
