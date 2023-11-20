import React, { useEffect, useRef } from 'react';
import './DrinkMeter.css';

function DrinkMeter({ fillPercentage }) {
    const canvasRef = useRef(null);

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

    return (
        <div className="drink-meter">
            <canvas ref={canvasRef} width={160} height={500} />
        </div>
    );
}

export default DrinkMeter;