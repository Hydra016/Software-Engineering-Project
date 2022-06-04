import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Rating = ({ rating }) => {
  console.log(rating);

  return (
    <View style={{ padding: 10, marginBottom: 50 }}>
        <View style={{ marginBottom: 20, marginTop: 50 }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', padding: 10}}>Ratings For This Product</Text>
        </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {rating.map((item, key) => {
          return (
            <View>
              <Ionicons style={styles.icon} name="star" />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    icon: {
        fontSize: 25,
        marginRight: 10,
        marginBottom: 10,
        color: '#FDCC0D'
      },
})

export default Rating;
