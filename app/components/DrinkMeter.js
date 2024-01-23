import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import AddDrinkButton from './AddDrinkButton';
import { Svg, Rect } from 'react-native-svg';

const DrinkMeter = (props) => {
    const [fillPercentage, setFillPercentage] = useState(0);

    useEffect(() => {
        const decreaseFill = () => {
            const eliminationRate = 0.015;
            const modifiedElimRate = eliminationRate * 833.333;
            const secondElimRate = modifiedElimRate / 3600;

            if (fillPercentage > 0) {
                setTimeout(() => {
                    setFillPercentage((prevFillPercentage) => {
                        const newFillPercentage = Math.max(prevFillPercentage - secondElimRate, 0);
                        console.log(newFillPercentage);
                        return newFillPercentage;
                    });
                }, 1000);
            }
        };

        decreaseFill();
    }, [fillPercentage]);

    const handleAddDrink = (alcGrams) => {
        // Calculate the BAC to add to the drink meter
        console.log('Alcohol in grams received in DrinkMeter:', alcGrams);
        let r = 0;

        if (props.gender === 'male') {
            r = 0.68;
        } else {
            r = 0.55;
        }
        const BAC = (alcGrams / ((props.weight * 1000) * r)) * 100;

        console.log('BAC:', BAC);
        const modifiedBAC = Math.round(BAC * 833.333);

        // update fillPercentage
        const newFillPercentage = fillPercentage + modifiedBAC;

        setFillPercentage(newFillPercentage);
    };

    const width = 160;
    const height = 500;
    const mercuryHeight = (height * fillPercentage) / 100;

    return (
        <View style={{ alignItems: 'center' }}>
            <AddDrinkButton onAlcoholCalculation={handleAddDrink} label="Add Drink" />
            <Svg width={width} height={height}>
                {/* Draw the thermometer outline */}
                <Rect x={width / 2 - 40} y={height - 400} width={80} height={400} stroke="black" strokeWidth={2} />

                {/* Draw the thermometer fluid (mercury) */}
                <Rect
                    x={width / 2 - 35}
                    y={height - 20 - mercuryHeight}
                    width={70}
                    height={mercuryHeight}
                    fill="red"
                />
            </Svg>
        </View>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    drinkMeter: {
        alignItems: 'center',
    },
    canvasContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    canvasBorder: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'black',
        overflow: 'hidden',
    },
    canvas: {
        width: 160,
        height: 500,
        backgroundColor: 'white', // Set canvas background color
    },
});

export default DrinkMeter;
