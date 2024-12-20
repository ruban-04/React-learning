import React from 'react'

function List() {
    const fruits = ['Apple', 'Banana', 'Cherry','kiwi', 'Orange', 'strawberry'];
  return (
    <div>

       <ul>

      {fruits.map((fruit, index) => ( 
        <li key={index}>{fruit}</li> 
        
      ))} 
      
    </ul>

    </div>
  )
}

export default List

