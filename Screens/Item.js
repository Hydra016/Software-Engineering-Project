import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import { Container } from "../Components/Container";

const ItemScreen = ({route}) => {
const id = route.params.id;
console.log(id)

  return (
    <Container>
      <Text>Id : {id}</Text>
    </Container>
  )
}
export default ItemScreen;