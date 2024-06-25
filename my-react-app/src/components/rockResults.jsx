import React from 'react';

function RockResults({ result, computerChoice}) {
    return (
        <>
            <h3 className='subtitle3'>{result}</h3>
            <h2 id = 'computer'>Computer played: {computerChoice}</h2>
        </>
    );
}

export default RockResults;
