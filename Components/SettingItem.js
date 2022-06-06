import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import TopBar from "../Components/TopBar";
import { Container } from '../Components/Container';
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const SettingItem = ({ title }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Ionicons name='chevron-forward-outline' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 10,
        },
    title: {
    fontSize: 15,
    // color: "#AFADA9"
    }
})

export default SettingItem;