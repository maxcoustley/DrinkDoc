import React, { useState } from "react";
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./app/navigations/AuthNavigator";
import BottomTabNavigator from "./app/navigations/BottomTabNavigator";

const App = () => {

  // isAuthenticated = 

  return (
    <NavigationContainer>
      {/*isAuthenticated ? <BottomTabNavigator /> : <AuthNavigator />*/}
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;

