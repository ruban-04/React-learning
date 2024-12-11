import React, { useState } from 'react'

function Counter() {
const [counter,setCounter] = useState(1000)

 const increment = () =>{
 setCounter((prev) => prev +3)

}

 const decrement = () =>{
 setCounter((prev) => prev -3)

}

  return (
    <div>
      <h3>{`counter value is:${counter}`}</h3>
      <button onClick={increment}>+3</button>
      <button onClick={decrement}>-3</button>
    </div>
  )
  
}

export default Counter
