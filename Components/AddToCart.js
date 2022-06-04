import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../context/CartContext";

const { width, height } = Dimensions.get("window");

const AddToCart = ({ item }) => {
  const { postCartItem } = useContext(Context);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('Cart')
        postCartItem(item)
      }}>
        <Text style={{color:'#fff', fontSize: 22}}>Add To Cart</Text>
        <Ionicons style={styles.icon} name="chevron-forward-outline" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FF6E00",
        padding: 20,
        width: width / 1.1,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
       
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 50
    },
    icon: {
        fontSize: 25,
        color: '#fff'
      },
});

export default AddToCart;
