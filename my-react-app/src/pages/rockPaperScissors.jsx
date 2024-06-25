import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import RockTitle from '../components/rockTitle.jsx'; 
import RockButtons from '../components/rockButtons.jsx'; 
import RockResults from '../components/rockResults.jsx'; 
import GoHome from '../components/GoHome.jsx'

function Rock() {
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [result, setResult] = useState('');

    const choices = ['Rock🪨', 'Paper📜', 'Scissors✂️'];

    const onButtonClick = (choice) => {
        setUserChoice(choice);
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
        determineWinner(choice, randomChoice);
    };

    const determineWinner = (user, computer) => {
        if (user === computer) {
            setResult("It's a tie! ➖");
        } else if (
            (user === 'Rock🪨' && computer === 'Scissors✂️') ||
            (user === 'Paper📜' && computer === 'Rock🪨') ||
            (user === 'Scissors✂️' && computer === 'Paper📜')
        ) {
            setResult('You win! ✨');
        } else {
            setResult('You lose! ❌');
        }
    };

    return (
        <>
            <Header />
            <RockTitle />
            <RockButtons onButtonClick={onButtonClick} />
            {userChoice && computerChoice && (
              <>
                <RockResults result={result} computerChoice={computerChoice} />
                <GoHome/>
              </>
            )}
        </>
    );
}

export default Rock;
