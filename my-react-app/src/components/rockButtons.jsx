import React from 'react';

function RockButtons({ onButtonClick }) {
    return (
        <div className="center-buttons">
            <button className="rock-button" onClick={() => onButtonClick('rock')}>&#129704;</button>
            <button className="rock-button" onClick={() => onButtonClick('paper')} >&#128220;</button>
            <button className="rock-button" onClick={() => onButtonClick('scissors')}>✂️</button>
        </div>
    );
}

export default RockButtons;
