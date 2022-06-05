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
import { Context as Extras } from "../context/ExtrasContext";
import { Context as Headphones } from "../context/HeadphonesContext";
import { Context as Phones } from "../context/PhonesContext";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import TopBar from "../Components/TopBar";
import CartItem from "../Components/CartItem";
import List from "../Components/List";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const CartScreen = () => {
  const navigation = useNavigation();
  const { state, getCartItems, deleteCartItem } = useContext(Context);
  const { state: phones, getPhones } = useContext(Phones);
  const { state: extra, getExtras } = useContext(Extras);
  const { state: headphones, getHeadphones } = useContext(Headphones);
  useEffect(() => {
    getCartItems();
    getHeadphones();
    getExtras();
    getPhones();
  }, []);

  if (state !== 0) {
    return (
      <Container>
        <ScrollView>
          <TopBar />
          <View style={{ padding: 10 }}>
            <View
              style={{
                dislpay: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.headingText}>My Cart</Text>
              <Text style={styles.headingText}>
                {state.length > 1
                  ? `${state.length} Items`
                  : `${state.length} Item`}
              </Text>
            </View>
            <FlatList
              keyExtractor={(item) => item.id}
              data={state}
              renderItem={({ item }) => {
                return (
                  <CartItem
                    item={item}
                    deleteItem={(id) => deleteCartItem(id)}
                  />
                );
              }}
            />
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.Checkout}
                onPress={() => {
                  navigation.navigate("CheckoutScreen");
                }}
              >
                <Text style={{ color: "#fff", fontSize: 22 }}>Chekout</Text>
                <Ionicons style={styles.icon} name="chevron-forward-outline" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <List
              state={phones}
              heading="Other Similar Products"
              name="pricetags-outline"
            />
            <List state={extra} heading="Smart Watches" name="watch-outline" />
            <List
              state={headphones}
              heading="Trending Headphones"
              name="headset-outline"
            />
          </View>
          <View
            style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
          >
            <Text style={{ color: "#767676" }}>v.1.0.0</Text>
          </View>
        </ScrollView>
      </Container>
    );
  } else if (state.length === 0) {
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
    backgroundColor: "red",
    elevation: 2,
    borderRadius: 10,
    width: width / 1.2,
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
    fontWeight: "bold",
    fontSize: 25,
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
  Checkout: {
    backgroundColor: "#FF6E00",
    padding: 20,
    width: width / 1.1,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 70,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
  },
  icon: {
    fontSize: 25,
    color: "#fff",
  },
});

export default CartScreen;
