import React from 'react';


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { homeKey, loginKey, spliteKey, resultKey } from "../constants";
import HomeScreen from "../components/HomeScreen";
import SpliteScreen from "../components/SpliteScreen";
import ResultScreen from "../components/ResultScreen";


const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={homeKey}>
        <Stack.Screen name={homeKey} component={HomeScreen} />
        <Stack.Screen name={spliteKey} component={SpliteScreen} />
        <Stack.Screen name={resultKey} component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}