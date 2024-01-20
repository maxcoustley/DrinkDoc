import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {COLORS, ROUTES} from '../../constants';
import { RadioButton } from 'react-native-paper';

const Info = () => {
    const navigation = useNavigation();
    const [value, setValue] = React.useState('male');
    const [weight, setWeight] = useState('');


    const handleWeightInput = (inputValue) => {
        // Allow only numeric input for weight
        const numericValue = inputValue.replace(/[^0-9]/g, ''); // Replace any non-numeric characters with an empty string

        setWeight(numericValue);
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => null,
        })
    }, [navigation]);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        })
        return () => backHandler.remove();
    }, []);

    return (
    <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <View style={styles.wFull}>
            <View style={styles.row}>
              {/* <Logo width={55} height={55} style={styles.mr7} /> */}
              <Text style={styles.brandName}>DrinkDoc</Text>
            </View>
  
            <Text style={styles.infoContinueTxt}>Fill out the profile information to continue</Text>
            <TextInput style={styles.input} placeholder="Name" />
            <View>
                <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <RadioButton.Item labelStyle={{ color: COLORS.gray}} label="Male" value="male" />
                    <RadioButton.Item labelStyle={{ color: COLORS.gray}} label="Female" value="female" />
                </RadioButton.Group>
            </View>
            
           
            <TextInput style={styles.input} keyboardType="numeric" value={weight} onChangeText={handleWeightInput} placeholder="Weight (kg)" />
          
  
            <View style={styles.infoBtnWrapper}>
              <LinearGradient
                colors={[COLORS.gradientForm, COLORS.primary]}
                style={styles.linearGradient}
                start={{y: 0.0, x: 0.0}}
                end={{y: 1.0, x: 0.0}}>
                {/******************** INFO BUTTON *********************/}
                <TouchableOpacity
                  onPress={() => navigation.navigate(ROUTES.SESSION)}
                  activeOpacity={0.7}
                  style={styles.infoBtn}>
                  <Text style={styles.infoText}>Continue</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
};



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

  export default Info;