import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import { Login } from './Telas/Login';
import Home from './Telas/Home';
import { BookFeed } from './Telas/BookFeed';
import TabNav from './Components/TabNav';
export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Tab.Screen name="TabNav" component={TabNav} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}