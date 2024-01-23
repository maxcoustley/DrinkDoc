import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, Modal } from 'react-native';

const AddDrinkButton = ({ label, onAlcoholCalculation }) => {
    const [showForm, setShowForm] = useState(false);
    const [drinkName, setDrinkName] = useState('');
    const [drinkType, setDrinkType] = useState('');
    const [alcCon, setAlcCon] = useState('');
    const [standardDrinks, setStandardDrinks] = useState('');

    const handleAddDrink = () => {
        setShowForm(true);
    };

    const handleFormClose = () => {
        setShowForm(false);
    };

    const handleFormSubmit = () => {
        setShowForm(false);

        const parsedStandardDrinks = parseFloat(standardDrinks);
        if (isNaN(parsedStandardDrinks)) {
            // Handle invalid input for standard drinks
            console.error('Invalid input for standard drinks');
            return;
        }

        const alcGrams = parseFloat(parsedStandardDrinks) * 10;

        // go back to event component passing the alcGrams
        if (onAlcoholCalculation && typeof onAlcoholCalculation === 'function') {
            onAlcoholCalculation(alcGrams);
        }
    };

    return (
        <View style={styles.addDrinkContainer}>
            <TouchableOpacity style={styles.addDrinkButton} onPress={handleAddDrink}>
                <Text>{label}</Text>
            </TouchableOpacity>

            <Modal visible={showForm} animationType="slide" transparent={true}>
                <View style={styles.formPopup}>
                    <Text style={styles.formHeader}>What did you drink?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Drink name"
                        value={drinkName}
                        onChangeText={(text) => setDrinkName(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Type"
                        value={drinkType}
                        onChangeText={(text) => setDrinkType(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Alcohol content"
                        value={alcCon}
                        onChangeText={(text) => setAlcCon(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Standard drinks"
                        keyboardType="numeric"
                        value={standardDrinks}
                        onChangeText={(text) => setStandardDrinks(text)}
                    />
                    {/* Other form fields */}
                    <TouchableOpacity style={styles.submitButton} onPress={handleFormSubmit}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButton} onPress={handleFormClose}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    addDrinkContainer: {
        alignItems: 'center',
    },
    addDrinkButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
    formPopup: {
        marginTop: height / 4,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
    },
    formHeader: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 5,
    },
    submitButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 5,
    },
    closeButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
});

export default AddDrinkButton;