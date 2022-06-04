import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useBackHandler } from "@react-native-community/hooks";
import { useNavigation } from "@react-navigation/native";

const TopBar = ({ route }) => {
  const { name } = useRoute();
  const navigation = useNavigation();

  const renderBackButton = () => {
    const backActionHandler = () => {};

    if (name === "ItemScreen" || name === "ProfileScreen") {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={{}}
        >
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

  return (
    <View
      style={{
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {renderBackButton()}
      <View>
        <Ionicons name="notifications-outline" style={{ fontSize: 22 }} />
      </View>
    </View>
  );
};

export default TopBar;
