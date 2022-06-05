import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const NotificationScreen = () => {
    return (
        <View style={{ padding: 10}}>
        <Text style={{ marginTop: 20, fontSize: 25, fontWeight: 'bold'}}>0 Notifications</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: height, width: width, color: '#afada9', marginTop: -70}}>
            <Text>No New Notifications...</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default NotificationScreen;