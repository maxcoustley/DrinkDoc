import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Info from '../screens/auth/Info';
import Intro from '../screens/home/Intro';
import Session from '../screens/home/Session';
import { ROUTES } from '../constants'
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function AuthNavigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={ROUTES.INTRO}
                component={Intro} 
            />
            <Stack.Screen 
                name={ROUTES.INFO}
                component={Info}
            />
            <Stack.Screen 
                name={ROUTES.SESSION}
                component={BottomTabNavigator}
            />
        </Stack.Navigator>
    );
}

export default AuthNavigator;