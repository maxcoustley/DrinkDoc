import React, { useEffect, useState } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {COLORS, ROUTES} from '../constants';
import Session from '../screens/home/Session';
import History from '../screens/home/History';
import Profile from '../screens/home/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTabBarButton from '../components/CustomTabBarButton';
import CustomTabBar from '../components/CustomTabBar';
import { useNavigation } from '@react-navigation/native';
import SessionNavigator from './SessionNavigator';

const Tab = createBottomTabNavigator();



function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
      <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: COLORS.dark,
          tabBarStyle: StyleSheet.tabBarStyle,
          tabBarActiveTintColor: COLORS.primary,
          tabBarIcon: ({color, size, focused}) => {
              let iconName;

              if (route.name === ROUTES.SESSION) {
              iconName = focused ? 'beer' : 'beer-outline';
              } else if (route.name === ROUTES.HISTORY) {
              iconName = focused ? 'book' : 'book-outline';
              } else if (route.name === ROUTES.PROFILE) {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
              } 

              return <Icon name={iconName} size={25} color={color} />;
          },
      })}>
      <Tab.Screen name={ROUTES.SESSION} component={SessionNavigator} options={{
        tabBarButton: props => <CustomTabBarButton route="session" {...props} />,
      }} />
      <Tab.Screen name={ROUTES.HISTORY} component={History} options={{
        tabBarButton: props => <CustomTabBarButton route="history" {...props} />,
      }}/>
      <Tab.Screen name={ROUTES.PROFILE} component={Profile} options={{
        tabBarButton: props => <CustomTabBarButton route="profile" {...props} />,
      }}/>
      </Tab.Navigator>
  );
}

export default BottomTabNavigator;