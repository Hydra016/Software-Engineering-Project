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
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Phone from "./Phone";

const List = ({ state, heading, name }) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.iconContainer}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={styles.headingText}>{heading}</Text>
        <Ionicons style={[styles.icon, { color: "#FF6E00" }]} name={name} />
        </View>
        <View>
          <Text style={{ color:'#a9a9a9', fontSize: 12, textDecorationLine: 'underline' }}>View All</Text>
        </View>
      </View>

      <View style={{ height: 190, marginTop: 20 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={state}
          renderItem={({ item }) => {
            return <Phone item={item} />;
          }}
        />
      </View>
      <View style={styles.extra}></View>
    </View>
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
  extra: {
    height: 65,
  },
  details: {
    width: 130,
  },
  headingText: {
    color: "#FF6E00",
    fontWeight: "bold",
    fontSize: 22,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    fontSize: 25,
    marginLeft: 5,
  },
});

export default List;
