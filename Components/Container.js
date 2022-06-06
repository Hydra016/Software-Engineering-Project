import React from "react";
import TopBar from "../Components/TopBar";
import { View, StyleSheet } from "react-native";

export const Container = ({ children }) => {
    return (
        <View style={styles.container}>
        <View style={styles.smallContainer}>
        <TopBar />
            {children}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    smallContainer: {
      marginTop: 21,
      backgroundColor: "#FFF",
    },
    container: {
        backgroundColor: "#FFF",
        width: '100%',
        height: '100%',
      },
})

