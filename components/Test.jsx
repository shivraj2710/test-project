import React, { useState } from 'react'

const Test = () => {
    const [counter, setCounter] = useState(0)
    
    if(counter === 2){
        throw new Error("Boom");
    }
  return (
    <div>
        <button onClick={()=>{
            setCounter(counter+1)
        }}>Boom </button>
        <p>
              {counter}
        </p>
    </div>
  )
}

export default Test