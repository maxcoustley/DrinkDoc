import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from  '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import {COLORS, ROUTES} from '../../constants';


function SessionPre(props) {
    const [startTime, setStartTime] = useState(new Date());
    const [peakTime, setPeakTime] = useState(new Date());
    const [mainTime, setMainTime] = useState(new Date());
    const [drunkLevel, setDrunkLevel] = useState('');
    const navigation = useNavigation();

    const onTimeChange = (selectedDate, setTimeFunction) => {
        const currentDate = selectedDate || new Date();
        setTimeFunction(currentDate);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select start time for your session</Text>
            <DateTimePicker
                value={startTime}
                mode="time"
                display="default"
                onChange={(selectedDate) => onTimeChange(selectedDate, setStartTime)}
            />

            <Text style={styles.title}>Select peak time</Text>
            <DateTimePicker
                value={peakTime}
                mode="time"
                display="default"
                onChange={(selectedDate) => onTimeChange(selectedDate, setPeakTime)}
            />

            <Text style={styles.title}>Select peak maintenance duration</Text>
            <DateTimePicker
                value={mainTime}
                mode="time"
                display="default"
                onChange={(selectedTime) => setMainTime(selectedTime)}
            />

            <TouchableOpacity
                style={styles.startButton}
                onPress={() => navigation.navigate(ROUTES.SESSION)}
                activeOpacity={0.7}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
    },
    startButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
    },
});

export default SessionPre;