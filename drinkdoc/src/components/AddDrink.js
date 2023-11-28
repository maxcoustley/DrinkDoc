import React, { useState } from 'react';
import './AddDrink.css';

function AddDrink({ onClick, label, onAlcoholCalculation }) {
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

        //go back to event component passing the alcGrams 
        if (onAlcoholCalculation && typeof onAlcoholCalculation === 'function') {
            onAlcoholCalculation(alcGrams);
        }
    };

    return (
        <div className="add-drink-container">
            <div className="add-drink" onClick={handleAddDrink}>
                {label}
            </div>
            {showForm && (
                <div className="form-popup">
                    {/* Your pop-up form goes here */}
                    <form>
                        <h3>What did you drink?</h3>
                        <input type="text" placeholder="Drink name" value={drinkName} onChange={(e) => setDrinkName(e.target.value)} />
                        <input type="text" placeholder="Type" value={drinkType} onChange={(e) => setDrinkType(e.target.value)} />
                        <input type="text" placeholder="Alcohol content" value={alcCon} onChange={(e) => setAlcCon(e.target.value)} />
                        <input type="number" placeholder="Standard drinks" value={standardDrinks} onChange={(e) => setStandardDrinks(e.target.value)} />
                        {/* Other form fields */}
                        <button type="submit" onClick={handleFormSubmit}>
                            Submit
                        </button>
                        <button type="submit" onClick={handleFormClose}>
                            Close
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AddDrink;