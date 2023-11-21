import React, { useState } from 'react';
import './AddDrink.css';

function AddDrink({ onClick, label }) {
    const [showForm, setShowForm] = useState(false);

    const handleAddDrink = () => {
        if (onClick && typeof onClick === 'function') {
            onClick();
            setShowForm(true);
        }
    };

    const handleFormClose = () => {
        setShowForm(false);
    };

    const handleFormSubmit = () => {
        setShowForm(false);
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
                        <input type="text" placeholder="Drink name" />
                        <input type="text" placeholder="Type" />
                        <input type="text" placeholder="Alcohol content" />
                        <input type="text" placeholder="Standard drinks" />
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