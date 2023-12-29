import React, { useEffect, useRef, useState } from 'react';
import './DrinkMeter.css';
import AddDrink from './AddDrink';

function DrinkMeter(props) {
    const canvasRef = useRef(null);
    const [fillPercentage, setFillPercentage] = useState(0);

    useEffect(() => {
        const decreaseFill = () => {
            const eliminationRate = 0.0002833333333;

            if (fillPercentage > 0) {
                setTimeout(() => {
                    setFillPercentage(prevFillPerecentage => {
                        const newFillPercentage = Math.max(prevFillPerecentage - eliminationRate, 0);
                        return newFillPercentage;
                    });
                }, 1000);
            }
        };

        decreaseFill();
        
    }, [fillPercentage]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const mercuryHeight = (height * fillPercentage) / 100;

        // Clear the canvas
        ctx.clearRect(0, 0, width, height);

        // Draw the thermometer outline
        ctx.beginPath();
        ctx.moveTo(width / 2 - 40, height);
        ctx.lineTo(width / 2 - 40, height - 400);
        ctx.lineTo(width / 2 + 40, height - 400);
        ctx.lineTo(width / 2 + 40, height);
        ctx.closePath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw the thermometer fluid (mercury)
        ctx.fillStyle = 'red';
        ctx.fillRect(width / 2 - 35, height - 20, 70, -mercuryHeight);

    }, [fillPercentage]);

    

    const handleAddDrink = (alcGrams) => {
        // Calculate the BAC to add to the drink meter
        console.log('Alcohol in grams received in DrinkMeter:', alcGrams);
        let r = 0;

        if (props.gender === "male") {
            r = 0.68;
        }
        else {
            r = 0.55;
        }
        const BAC = (alcGrams / ((props.weight * 1000) * r)) * 100;

        console.log('BAC:', BAC);
        const modifiedBAC = Math.round(BAC * 833.333);

        //update fillPercentage
        const newFillPercentage = fillPercentage + modifiedBAC;

        setFillPercentage(newFillPercentage)
    };

    return (
        <div className="drink-meter">
            <AddDrink onAlcoholCalculation={handleAddDrink} label="Add Drink" />
            <canvas ref={canvasRef} width={160} height={500} />
        </div>
    );
}

export default DrinkMeter;