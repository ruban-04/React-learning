import React, { useEffect, useState } from 'react'

function Counter () {
    const [count , setCount] = useState(0);

    useEffect(() => {
        console.log ('count mounted / update');
    }, [count]);

    

  return (
    <div>

<p>Count: {count}</p>

<button onClick={() => setCount(count + 1)}>Increase</button>
      
    </div>
  )
}

export default Counter
