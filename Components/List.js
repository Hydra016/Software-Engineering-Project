import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/PhonesContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const List = () => {
  const { state } = useContext(Context);
  const navigation = useNavigation();

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
      <View style={styles.iconContainer}>
      <Text style={styles.headingText}>Hotest Deals</Text>
      <Ionicons style={styles.icon} name='flame' />
      </View>
      
      <FlatList
        keyExtractor={(item) => item.id}
        data={state}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ItemScreen", {id: item.id})}
            >
              <View style={styles.container}>
                <Image style={styles.img} source={{ uri: item.mainImg }} />
                <View style={styles.details}>
                  <Text>{item.title}</Text>
                  <Text>{item.memory}</Text>
                  <Text>{item.storage}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.extra}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    padding: 20,
    backgroundColor: "#ffffff",
    elevation: 2,
    borderRadius: 10,
  },
  img: {
    width: 70,
    height: 70,
    resizeMode: "contain"
  },
  extra: {
    height: 65,
  },
  details: {
    width: 130,
  },
  headingText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: "row",

  },
  icon: {
    fontSize: 25,
    marginLeft: 5,
  },
});

export default List;
