import React from "react";
import { View, StyleSheet } from "react-native";

export const Container = ({ children }) => {
    return (
        <View style={styles.container}>
        <View style={styles.smallContainer}>
            {children}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    smallContainer: {
      marginTop: 30,
      backgroundColor: "#FFF",
    },
    container: {
        backgroundColor: "#FFF",
        width: '100%',
        height: '100%',
      },
})

