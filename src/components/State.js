import React, { useState } from 'react'


function State() {

const [vendor,setUser] = useState('react')
const onclick = () =>{

    setUser('javascript')
    console.log(vendor)
}

  return (
    <div>
      <h2>{vendor}</h2>
      <button className="button" onClick={onclick}>Changename</button>
    </div>
  )
  
}

export default State
