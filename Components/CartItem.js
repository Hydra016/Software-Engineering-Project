import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Modal from "./Modal"; 


const CartItem = ({ item, deleteItem }) => {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal 
      visible={visible}
      title='Are you sure you want to remove this item from your cart?'
      setModalVisible={setVisible}
      onPressYes={() => deleteItem(item.id)}
      />
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
            <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
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