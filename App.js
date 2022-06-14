import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "./context/PhonesContext";
import { Provider as CartProvider } from "./context/CartContext";
import { Provider as ExtrasProvider } from "./context/ExtrasContext";
import { Provider as HeadphonesProvider } from "./context/HeadphonesContext";

import {
  ItemScreenNavigation,
  CartScreenNavigation,
  ProfileScreenNavigation,
  TrackScreenNavigation,
  SettingsScreenNavigation,
} from "./navigation/CustomNavigation";
import { StyleSheet, View, Text } from "react-native";
import Splash from './Screens/Splash';

const Tab = createBottomTabNavigator();

const App = () => {
  const [ loading, isLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      isLoading(false)
    }, 5000)
  }, [])

  if(loading) {
    return <Splash />
  }

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              paddingLeft: 20,
              paddingRight: 20,
              height: 60,
              ...styles.shadow,
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === "Home") {
                iconName = focused
                  ? "home"
                  : "home-outline";
              } else if (rn === "Cart") {
                iconName = focused ? "cart" : "cart-outline";
              } else if (rn === "Profile") {
                iconName = focused ? "person" : "person-outline";
              } else if (rn === "Track") {
                iconName = focused ? "analytics" : "analytics-outline";
              } else if (rn === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              }

              return (
                <View style={styles.textContainer}>
                  <Ionicons name={iconName} size={size} color={color} />
                </View>
              );
            },
          })}
          tabBarOptions={{
            showLabel: true,
            activeTintColor: "#FF6E00",
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70 }
          }}
        >
          <Tab.Screen name="Home" component={ItemScreenNavigation} />
          <Tab.Screen name="Cart" component={CartScreenNavigation} />
          <Tab.Screen name="Profile" component={ProfileScreenNavigation} />

          <Tab.Screen name="Track" component={TrackScreenNavigation} />
          <Tab.Screen name="Settings" component={SettingsScreenNavigation} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOffset: {
      width: 0.25,
      height: 0.25,
    },
    shadowRadius: 3.5,
    elevation: 5,
  },
  icon: {
    fontSize: 25,
    color: "#aaaaaa",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 10,
    color: "#aaaaaa",
  },
  mainButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#fff",
    borderRadius: 500,
    elevation: 2,
    width: 70,
    height: 70,
  },
});

export default () => {
  return (
    <HeadphonesProvider>
    <ExtrasProvider>
    <CartProvider>
      <Provider>
        <App />
      </Provider>
    </CartProvider>
    </ExtrasProvider>
    </HeadphonesProvider>
  );
};
