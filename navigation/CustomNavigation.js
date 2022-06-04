import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import ItemScreen from "../Screens/Item";
import HomeScreen from "../Screens/Home";
import CartScreen from "../Screens/Cart";
import ProfileScreen from "../Screens/Profile";
import TrackScreen from "../Screens/Track";
import SettingsScreen from "../Screens/Settings";

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
