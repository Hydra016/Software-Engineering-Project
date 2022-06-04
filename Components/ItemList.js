import React, { useContext } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Context } from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const ItemList = ({ item }) => {
  const { postCartItem } = useContext(Context);
  const navigation = useNavigation();

  const {
    title,
    releaseDate,
    platform,
    maxUpgrade,
    storage,
    memory,
    chip,
    camera,
    resolution,
    battery,
    size,
    price,
  } = item;

  const items = [
    {
      id: 1,
      title: "Release Date",
      icon: <MaterialIcons style={styles.icon} name="calendar-today" />,
      value: releaseDate,
    },
    {
      id: 2,
      title: "Maximum Upgrade",
      icon: <MaterialIcons style={styles.icon} name="code" />,
      value: maxUpgrade,
    },
    {
      id: 3,
      title: "Memory",
      icon: <MaterialIcons style={styles.icon} name="memory" />,
      value: memory,
    },
    {
      id: 4,
      title: "Storage",
      icon: <MaterialIcons style={styles.icon} name="folder" />,
      value: storage,
    },
    {
      id: 5,
      title: "Chipset",
      icon: <MaterialIcons style={styles.icon} name="developer-board" />,
      value: chip,
    },
    {
      id: 6,
      title: "Camera",
      icon: <MaterialIcons style={styles.icon} name="photo-camera" />,
      value: camera,
    },
    {
      id: 7,
      title: "Resolution",
      icon: <MaterialIcons style={styles.icon} name="hd" />,
      value: resolution,
    },
    {
      id: 8,
      title: "Battery",
      icon: <MaterialIcons style={styles.icon} name="battery-full" />,
      value: battery,
    },
    {
      id: 9,
      title: "Size",
      icon: <MaterialIcons style={styles.icon} name="crop-portrait" />,
      value: size,
    },
    {
      id: 10,
    },
  ];

  const renderPlatform = (platform) => {
    if (platform === "Android") {
      return (
        <View style={styles.detailesContainer}>
          <Ionicons style={styles.icon} name="logo-android" />
          <Text>{platform}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.detailesContainer}>
          <Ionicons style={styles.icon} name="logo-apple" />
          <Text>{platform}</Text>
        </View>
      );
    }
  };

  return (
    <View>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        {renderPlatform(platform)}
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.detailesContainer}>
                <Text style={styles.icon}>{item.icon}</Text>
                <Text>{item.value}</Text>
              </View>
            );
          }}
        />
        <View style={styles.priceContainer}>
          <Ionicons style={styles.icon} name="cash" />
          <Text style={styles.price}>{price}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            postCartItem(item);
            navigation.navigate("CartScreen");
          }}
        >
          <View style={styles.button}>
            <Text>Add To Cart</Text>
            <MaterialIcons style={styles.icon} name="chevron-right" />
          </View>
        </TouchableOpacity>
        <View style={styles.extra}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
  },
  details: {
    width: 130,
  },
  container: {
    height: height / 2 - 110,
    padding: 20,
  },
  detailesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  extra: {
    height: 50,
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
  buttonContainer: {
    //   display: 'flex',
    //   flexDirection: "row",
    //   justifyContent: "center"
    marginTop: 25,
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: -20,
    marginLeft: 5,
  },
});

export default ItemList;
