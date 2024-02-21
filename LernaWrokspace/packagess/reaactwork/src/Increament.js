

import React, { useState } from 'react'

export default function Increament() {
const[count,setCount] = useState(0);

    const handleIncreament = ()=>{
        setCount(count+1);
        {console.log("Count number ", count)}
    }
    
  return (
    <div className='main-container'>
         <h2>Code in ReactJS</h2>
        <h1>{count}</h1>
        <button onClick={()=>handleIncreament()}>Add</button>
    </div>
  )
}
