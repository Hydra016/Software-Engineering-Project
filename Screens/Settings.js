import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import TopBar from "../Components/TopBar";
import { Container } from '../Components/Container';
import SettingItem from "../Components/SettingItem";
import Footer from "../Components/Footer";
import ToggleSwitch from "../Components/ToggleSwitch";

const { height, width } = Dimensions.get("window");

const SettingsScreen = () => {
    return (
        <Container>
            <ScrollView style={{ padding: 10 }}>
            <Text style={styles.heading}>App Settings</Text>
            <View style={styles.container}>
                <View style={styles.part}>
                    <Text style={styles.textHeading}>General</Text>
                    <SettingItem title="Edit Profile" />
                    <SettingItem title="Change Password" />
                    <SettingItem title="Change Language" />
                    <SettingItem title="Change Delivery Address" />
                </View>
                <View style={styles.part}>
                <Text style={styles.textHeading}>Notifications</Text>
                <ToggleSwitch title='Allow Notifications' />
                </View>
                <View style={styles.part}>
                <Text style={styles.textHeading}>Terms And Support</Text>
                <SettingItem title="Terms and Conditions" />
                    <SettingItem title="Privacy Policy" />
                    <SettingItem title="Support" />
                </View>
            </View>
            <Footer />
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        fontWeight: "bold",
    },
    container: {
        marginTop: 20,
    },
    subHeading: {
        fontWeight: "bold",
    fontSize: 17,
    color: "#AFADA9",
    },
    textHeading: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 5
    },
    part: {
        marginBottom: 17
    }
})

export default SettingsScreen;