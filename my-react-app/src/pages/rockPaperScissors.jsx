import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import RockTitle from '../components/rockTitle.jsx'; // Import RockTitle
import RockButtons from '../components/rockButtons.jsx'; // Import RockButtons
import RockResults from '../components/rockResults.jsx'; // Import RockResults

function Rock() {
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [result, setResult] = useState('');

    const choices = ['rock', 'paper', 'scissors'];

    const onButtonClick = (choice) => {
        setUserChoice(choice);
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
        determineWinner(choice, randomChoice);
    };

    const determineWinner = (user, computer) => {
        if (user === computer) {
            setResult("It's a tie!");
        } else if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')
        ) {
            setResult('You win!');
        } else {
            setResult('You lose!');
        }
    };

    return (
        <>
            <Header />
            <RockTitle />
            <RockButtons onButtonClick={onButtonClick} />
            {userChoice && computerChoice && (
                <RockResults result={result} computerChoice={computerChoice} />
            )}
        </>
    );
}

export default Rock;
