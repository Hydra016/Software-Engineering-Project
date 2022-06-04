import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Loader = () => {
    return (
        <View style={[ StyleSheet.absoluteFillObject, styles.Container]}>
            <LottieView 
            source={require('../assets/97018-window10-style-login-loader.json')}
            autoPlay
            loop
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1
    }
})

export default Loader;