import React from 'react';

function RockButtons({ onButtonClick }) {
    return (
        <div className="center-buttons">
            <button className="rock-button" onClick={() => onButtonClick('Rock🪨')}>&#129704;</button>
            <button className="rock-button" onClick={() => onButtonClick('Paper📜')} >&#128220;</button>
            <button className="rock-button" onClick={() => onButtonClick('Scissors✂️')}>✂️</button>
        </div>
    );
}

export default RockButtons;
