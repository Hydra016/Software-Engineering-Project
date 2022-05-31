import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{uri: item.mainImg}}/>
            <View style={styles.textView}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        padding: 10,
        flex: 1,
        width: width - 20,
        height: height / 2.2,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5
    },
    textView: {
        position: "absolute",
        // bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: "contain"
    },
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: "#000",
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5,
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0.8, height: 0.9},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    }
})

export default CarouselItem;