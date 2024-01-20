import React, { useState } from "react";
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./app/navigations/AuthNavigator";

const App = () => {

  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;

