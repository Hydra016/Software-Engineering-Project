import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const CartItem = ({ item, deleteItem }) => {
    console.log(item)

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: item.mainImg }} />
            <View style={styles.itemContainer}>
                <View style={styles.itemDetails}>
                <Ionicons style={styles.icon} name="phone-portrait-outline" />
                <Text>{item.title}</Text>
                </View>
                <View style={styles.itemDetails}>
                <Ionicons style={styles.icon} name="folder-outline" />
                <Text>{item.storage}</Text>
                </View>
                <View style={styles.itemDetails}>
                <Ionicons style={styles.icon} name="hardware-chip-outline" />
                <Text>{item.memory}</Text>
                </View>
                <View style={styles.itemDetails}>
                <Ionicons style={styles.icon} name="cog-outline" />
                <Text>{item.chip}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => deleteItem(item.id)}>
                <Ionicons style={styles.deleteIcon} name='trash-outline' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        borderColor: '#ebecf0',
        borderRadius: 20
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    itemDetails: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon : {
        marginRight: 5
    },
    itemContainer: {
        justifyContent: "space-between",
        maxWidth: 110
    },
    button: {
        justifyContent: "center"
    },
    deleteIcon: {
        fontSize: 22,
        color: '#000'
    }
})

export default CartItem;