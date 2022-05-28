import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <Text>HomeScreen</Text>
      <Button title="click" onPress={() => navigation.navigate("ItemScreen")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8fcbbc',
    width: '100%',
    height: '100%',
  },
  main: {
    marginTop: 30
  }
});

export default HomeScreen;