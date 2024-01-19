import React, { useState } from "react";
import { View, Text } from 'react-native';
import IntroScreen from './app/screens/IntroScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  // After the intro animation, setIntroComplete(true)

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
      name="Intro"
      component={IntroScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

