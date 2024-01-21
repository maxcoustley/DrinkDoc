import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Session from '../screens/home/Session';
import SessionPre from '../screens/home/SessionPre';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

function SessionNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.SESSION} component={Session} />
            <Stack.Screen name={ROUTES.SESSION_PRE} component={SessionPre} />
        </Stack.Navigator>
    );
}

export default SessionNavigator;