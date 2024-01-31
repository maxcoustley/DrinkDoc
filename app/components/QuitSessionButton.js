import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SessionStart from '../screens/home/SessionStart';

const QuitSessionButton = ({label}) => {

    const navigation = useNavigation();

    const handleQuitSession = () => {
      navigation.navigate(SessionStart); 
    };

    return (
        <TouchableOpacity onPress={handleQuitSession}>
                <Text>{label}</Text>
        </TouchableOpacity>
    );
}

export default QuitSessionButton;