import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Loader = (props) => {
    return (
        <View style={[ StyleSheet.absoluteFillObject, styles.container, ...props]}>
            <LottieView 
            source={require('../assets/98510-loader.json')}
            autoPlay
            loop
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1
    }
})

export default Loader;