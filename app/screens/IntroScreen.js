import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const IntroScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
  
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
            toValue: 1,
            duration: 2500, // Adjust the duration as needed
            useNativeDriver: true,
            }
        ).start();

        setTimeout(() => {
            navigation.navigate('HomeScreen'); // Replace 'NextScreen' with the name of your next screen
        }, 2500);
    }, []);
  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Animated.View
            style={{
              opacity: fadeAnim,
              width: 250,
              height: 50,
            }}
          >
            <Text style={styles.appName}>DrinkDoc</Text>
          </Animated.View>
        </View>
    );
};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fadeInView: {
      backgroundColor: 'transparent', // Adjust background color if needed
    },
    appName: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  }); 

export default IntroScreen;