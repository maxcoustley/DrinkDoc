import "./Info.css";
import React, { useState } from 'react';
import Event from './Event';

function Info() {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [startTime, setStartTime] = useState('');
    const [peakTime, setPeakTime] = useState('');
    const [mainTime, setMainTime] = useState('');
    const [drunkLevel, setDrunkLevel] = useState('');
    const [showStep1, setShowStep1] = useState(true);
    const [showStep2, setShowStep2] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const handleNextClick = () => {
        setShowStep1(false);
        setShowStep2(true);
    };

    const handlePreviousClick = () => {
        setShowStep1(true);
        setShowStep2(false);
    }

    const handleSubmitClick = () => {
        setShowStep1(false);
        setShowStep2(false);
        setShowResult(true)
    }

    return (
        <>
            {showStep1 && (
                <div>
                    <div className="text">Tell us about yourself</div>
                    <div className="info">
                        <div className='input'>
                            <input type='text' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='input'>
                            <input type='text' placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
                        </div>
                        <div className='input'>
                            <input type='number' placeholder="Body Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                        </div>
                    </div>
                    <div className="submit">
                        <button id="btn" type="button" onClick={handleNextClick}>Next</button>
                    </div>
                </div>
            )}

            {showStep2 && (
                <div>
                    <div className="text">Session Markers</div>
                    <div className="info">
                        <div className='input'>
                            <input type='text' placeholder="Start time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                        </div>
                        <div className='input'>
                            <input type='text' placeholder="Peak time" value={peakTime} onChange={(e) => setPeakTime(e.target.value)} />
                        </div>
                        <div className='input'>
                            <input type='text' placeholder="Maintain time" value={mainTime} onChange={(e) => setMainTime(e.target.value)} />
                        </div>
                        <div className='input'>
                            <input type='text' placeholder="Drunk level" value={drunkLevel} onChange={(e) => setDrunkLevel(e.target.value)} />
                        </div>
                        
                    </div>
                    <div className="submit">
                        <button type="button" onClick={handlePreviousClick}>Previous</button>
                        <button type="button" onClick={handleSubmitClick}>Start</button>
                    </div>
                </div>

            )}
            
            {showResult && (
                <Event
                    name={name}
                    gender={gender}
                    weight={weight}
                    startTime={startTime}
                    peakTime={peakTime}
                    mainTime={mainTime}
                    drunkLevel={drunkLevel}
                 />
            )}
        </>
    );
}



export default Info;