import React from 'react';
import { Animated, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
import {COLORS, ROUTES} from '../../constants';

function Session(props) {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>Start your session!</Text>
            <View style={styles.infoBtnWrapper}>
              <LinearGradient
                colors={[COLORS.gradientForm, COLORS.primary]}
                style={styles.linearGradient}
                start={{y: 0.0, x: 0.0}}
                end={{y: 1.0, x: 0.0}}>
                {/******************** INFO BUTTON *********************/}
                <TouchableOpacity
                  onPress={() => navigation.navigate(ROUTES.SESSION_PRE)}
                  activeOpacity={0.7}
                  style={styles.infoBtn}>
                  <Text style={styles.infoText}>Start</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    container: {
      padding: 15,
      width: '100%',
      position: 'relative',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    brandName: {
      fontSize: 42,
      textAlign: 'center',
      fontWeight: 'bold',
      color: COLORS.primary,
      opacity: 0.9,
    },
    infoContinueTxt: {
      fontSize: 16,
      textAlign: 'center',
      color: COLORS.gray,
      marginBottom: 16,
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 1,
      borderColor: COLORS.grayLight,
      padding: 15,
      marginVertical: 10,
      borderRadius: 5,
      height: 55,
      paddingVertical: 0,
    },
    // Info Btn Styles
    infoBtnWrapper: {
      height: 55,
      width: 100,
      marginTop: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 5,
    },
    linearGradient: {
      width: '100%',
      borderRadius: 50,
    },
    infoBtn: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 55,
    },
    infoText: {
      color: COLORS.white,
      fontSize: 16,
      fontWeight: '400',
    },
    radioItem: {
        labelStyle: ''
    },
    
    // utils
    wFull: {
      width: '100%',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    mr7: {
      marginRight: 7,
    },
  });

export default Session;