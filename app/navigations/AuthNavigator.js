import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Info from '../screens/auth/Info';
import { ROUTES } from '../constants'
import BottomTabNavigator from './BottomTabNavigator';
import SessionPre from '../screens/home/SessionPre';

const Stack = createStackNavigator();

function AuthNavigator(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={ROUTES.INFO}
                component={Info}
            />
            <Stack.Screen 
                name={ROUTES.SESSION_START}
                component={BottomTabNavigator}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

export default AuthNavigator;