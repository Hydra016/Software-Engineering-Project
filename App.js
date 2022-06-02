import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "./context/PhonesContext";
import { Provider as CartProvider } from "./context/CartContext";
import CartScreen from "./Screens/Cart";

import {
  ItemScreenNavigation,
  CartScreenNavigation,
  ProfileScreenNavigation,
  TrackScreenNavigation
} from "./navigation/CustomNavigation";
import { StyleSheet, View, Text } from "react-native";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: "#ffffff",
              borderRadius: 15,
              height: 70,
              ...styles.shadow
            }
          }}
          tabBarOptions={{
            showLabel: false,
          }}
        >
          <Tab.Screen 
          name="HomeScreenTab" 
          component={ItemScreenNavigation}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Ionicons style={styles.icon} name='home-outline' />
              </View>
            )
          }}
          />
          <Tab.Screen 
          name="CartScreen" 
          component={CartScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Ionicons style={styles.icon} name='cart-outline' />
              </View>
            )
          }}
          />
          <Tab.Screen 
          name="ProfileScreenTab" 
          component={ProfileScreenNavigation}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Ionicons style={styles.icon} name='person-outline' />
              </View>
            )
          }}
          />
          <Tab.Screen 
          name="TrackScreenTab" 
          component={TrackScreenNavigation}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Ionicons style={styles.icon} name='analytics-outline' />
              </View>
            )
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
   shadowColor: '#7F5DF0',
   shadowOffset: {
     width: 0,
     height: 10,
   },
   shadowOffset: {
     width: 0.25,
     height: 0.25
   },
   shadowRadius: 3.5,
   elevation: 5
  },
  icon: {
    fontSize: 25
  }
});

export default () => {
  return <CartProvider><Provider><App /></Provider></CartProvider>
} 
