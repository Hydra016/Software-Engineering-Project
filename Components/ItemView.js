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
import fromUnixTime from 'date-fns/fromUnixTime'
import { getDate } from "date-fns";

const { height, width } = Dimensions.get("window");

const ItemView = ({ item }) => {
  const { postCartItem } = useContext(Context);
  const navigation = useNavigation();

  const { releaseDate, platform, maxUpgrade, storage, memory, chip, camera, resolution, battery, size, price } = item;

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
      <View style={{ padding: 10, marginBottom:-10}}>
    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
    <View style={{ maxWidth: width/2 }}>
        <View style={styles.detailesContainer}>
            <Ionicons style={styles.icon} name="calendar-outline" />
            <Text>{String(fromUnixTime(releaseDate.seconds)).slice(0, 10)}</Text>
        </View>
        <View style={styles.detailesContainer}>
            <Text>{renderPlatform(platform)}</Text>
        </View>
        <View style={styles.detailesContainer}>
        <Ionicons style={styles.icon} name="code-outline" />
        <Text style={{ maxWidth: width/3 }}>{maxUpgrade}</Text>
        </View>
        <View style={styles.detailesContainer}>
        <Ionicons style={styles.icon} name="phone-portrait-outline" />
        <Text>{resolution}</Text>
        </View>
        <View style={styles.detailesContainer}>
        <Ionicons style={styles.icon} name="resize-outline" />
        <Text>{size} inches</Text>
        </View>
    </View>
    <View style={{ maxWidth: width/2 }}>
    <View style={styles.detailesContainer}>
    <Ionicons style={styles.icon} name="folder-outline" />
        <Text>{storage}</Text>
        </View>
        <View style={styles.detailesContainer}>
        <Ionicons style={styles.icon} name="hardware-chip-outline" />
        <Text>{memory}</Text>
        </View>
        <View style={styles.detailesContainer}>
        <Ionicons style={styles.icon} name="camera-outline" />
        <Text>{camera}</Text>
        </View>
        <View style={styles.detailesContainer}>
        <Ionicons style={styles.icon} name="cog-outline" />
        <Text>{chip}</Text>
        </View>
        <View style={styles.detailesContainer}>
        <Ionicons style={styles.icon} name="battery-full-outline" />
        <Text>{battery}mAh</Text>
        </View>
    </View>     
    </View>

    <View style={{justifyContent: 'center', alignItems: 'center', width: width}}>
        <Text style={{ fontSize: 30, marginTop: 50, color: "#FF6E00" }}>Buy now in just <Text style={{ fontSize: 32, fontWeight: 'bold'}}>${item.price}</Text>only!</Text>
    </View>
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
  detailesContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    marginTop: 10
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

export default ItemView;
