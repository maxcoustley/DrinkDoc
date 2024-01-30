import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SessionStart from '../screens/home/SessionStart';
import SessionPre from '../screens/home/SessionPre';
import Session from '../screens/home/Session';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

function SessionNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.SESSION_START} component={SessionStart} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTES.SESSION_PRE} component={SessionPre} />
            <Stack.Screen name={ROUTES.SESSION} component={Session} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

export default SessionNavigator;