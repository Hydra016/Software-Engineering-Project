import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/Home';
import Videos from './components/Videos';
import CartScreen from './components/Cart';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="HomeScreen"
            component={HomeScreen}
          />
          <Tab.Screen 
            name="CartScreen"
            component={CartScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;
