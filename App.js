import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home';
import Videos from './components/Videos';

const Stack = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Overview' }} />
      <Stack.Screen name="Videos" component={Videos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;