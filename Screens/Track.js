import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>TrackScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8fcbbc',
    width: '100%',
    height: '100%'
  }
});

export default TrackScreen;