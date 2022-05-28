import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import ItemScreen from "../components/Item";
import HomeScreen from "../components/Home";
import CartScreen from "../components/Cart";
import ProfileScreen from "../components/Profile";
import TrackScreen from "../components/Track";

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
