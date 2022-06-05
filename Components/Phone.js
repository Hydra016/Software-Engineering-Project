import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Phone = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ItemScreen", {id: item.id})}>
      <View style={styles.listContainer}>
        <View style={{ flex: 2, padding: 10, borderBottomWidth: 1, borderBottomColor: "#dddddd"}}>
          <Image
            style={styles.img}
            source={{uri: item.mainImg}}
          />
        </View>
        <View style={{ flex: 1, padding: 5, display: 'flex', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}>{item.title}</Text>
          <Text>{item.memory}{item.storage ? `/${item.storage}` : ``}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: 190,
    width: 150,
    marginRight: 20,
    borderWidth: 0.5,
    borderColor: "#dddddd",
    borderRadius: 10,
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
});

export default Phone;
