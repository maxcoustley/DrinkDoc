import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from  '@react-native-community/datetimepicker';


function SessionPre(props) {
    const [startTime, setStartTime] = useState(new Date());
    const [peakTime, setPeakTime] = useState(new Date());
    const [mainTime, setMainTime] = useState(new Date());
    const [drunkLevel, setDrunkLevel] = useState('');

    const onStartTimeChange = (selectedDate) => {
        const currentDate = selectedDate || startTime;
        setStartTime(currentDate);
    };

    const onPeakTimeChange = (selectedDate) => {
        const currentDate = selectedDate || peakTime;
        setPeakTime(currentDate);
    };

    const onMainTimeChange = (selectedTime) => {
        setMainTime(selectedTime);
    };

    return (
        <View>
            <Text>Select what time you want to start your session</Text>
            <DateTimePicker value ={startTime} mode="time" display="default" onChange={onStartTimeChange} />
            <Text>Select what time you want to reach your peak</Text>
            <DateTimePicker value ={peakTime} mode="time" display="default" onChange={onPeakTimeChange} />
            <Text>Select how long you want to maintain that peak</Text>
            <DateTimePicker value ={mainTime} mode="time" display="default" onChange={onMainTimeChange} />
            <TouchableOpacity
                  onPress={() => navigation.navigate(ROUTES.SESSION_PRE)}
                  activeOpacity={0.7}>
                  <Text>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SessionPre;