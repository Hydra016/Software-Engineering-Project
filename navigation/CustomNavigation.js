import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import ItemScreen from "../Screens/Item";
import HomeScreen from "../Screens/Home";
import CartScreen from "../Screens/Cart";
import ProfileScreen from "../Screens/Profile";
import TrackScreen from "../Screens/Track";
import SettingsScreen from "../Screens/Settings";
import CheckoutScreen from "../Screens/Checkout";
import NotificationScreen from "../Screens/Notifications"
import LoginScreen from "../Screens/LoginScreen";

const Stack = createStackNavigator();

export const ItemScreenNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen 
                name="ItemScreen"
                component={ItemScreen}
            />
            <Stack.Screen 
                name="NotificationScreen"
                component={NotificationScreen}
            />
        </Stack.Navigator>
    )
}

export const CartScreenNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen 
                name="CartScreen"
                component={CartScreen}
            />
            <Stack.Screen 
                name="CheckoutScreen"
                component={CheckoutScreen}
            />
            <Stack.Screen 
                name="NotificationScreen"
                component={NotificationScreen}
            />
        </Stack.Navigator>
        
    )
}

export const ProfileScreenNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen 
                name="ProfileScreen"
                component={ProfileScreen}
            />
        </Stack.Navigator>
    )
}

export const TrackScreenNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen 
                name="TrackScreen"
                component={TrackScreen}
            />
            <Stack.Screen 
                name="NotificationScreen"
                component={NotificationScreen}
            />
        </Stack.Navigator>
    )
}


export const SettingsScreenNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen 
                name="SettingsScreen"
                component={SettingsScreen}
            />
        </Stack.Navigator>
    )
}
