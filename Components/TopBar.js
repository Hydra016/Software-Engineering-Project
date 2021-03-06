import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useBackHandler } from "@react-native-community/hooks";
import { useNavigation } from "@react-navigation/native";

const TopBar = ({ route }) => {
  const { name } = useRoute();
  const navigation = useNavigation();

  const renderBackButton = () => {
    const backActionHandler = () => {};

    if (
      name === "ItemScreen" ||
      name === "ProfileScreen" ||
      name === "NotificationScreen"
    ) {
      return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
          <Ionicons name="chevron-back-outline" style={{ fontSize: 22 }} />
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={{}}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 500 }}
            source={require("../assets/user-1.jpg")}
          />
        </View>
      );
    }
  };

  const renderSearchBar = () => {
    if (name === "HomeScreen") {
      return (
        <View style={styles.inputContainer}>
          <Ionicons
            style={{ fontSize: 20, marginLeft: 10 }}
            name="search-outline"
          />
          <TextInput
            style={styles.inputText}
            placeholder="Search Marketplace..."
          />
        </View>
      );
    } else if (name === "CartScreen") {
      return (
        <View style={styles.inputContainer}>
          <Ionicons
            style={{ fontSize: 20, marginLeft: 10 }}
            name="search-outline"
          />
          <TextInput style={styles.inputText} placeholder="Search Cart..." />
        </View>
      );
    }
  };

  StatusBar.setBackgroundColor("#FF6E00");

  return (
    <View
      style={{
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FF6E00",
        // borderBottomEndRadius: 20,
        // borderBottomLeftRadius: 20
      }}
    >
      {renderBackButton()}
      {renderSearchBar()}
      <TouchableOpacity
        onPress={() => navigation.navigate("NotificationScreen")}
      >
        <Ionicons name="notifications-outline" style={{ fontSize: 22 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    margin: 5,
    borderColor: "#ebecf0",
    backgroundColor: "#ebecf0",
    width: 200,
    borderRadius: 20,
  },
  inputContainer: {
    padding: 2,
    borderRadius: 20,
    backgroundColor: "#ebecf0",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default TopBar;
