

import React, { useState } from 'react';

export default function AssTypescript() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        console.log("Count number ", count);
    };
    
    return (
        <div className='main-container'>
            <h2>Code in typesctipy</h2>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Add</button>
        </div>
    );
}
