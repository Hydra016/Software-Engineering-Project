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
      backgroundColor: '#8fcbbc',
    },
    container: {
        backgroundColor: '#8fcbbc',
        width: '100%',
        height: '100%',
      },
})

