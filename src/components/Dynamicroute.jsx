import React from 'react'
import { useParams } from 'react-router-dom'

function Dynamicroute() {

    const {Name} = useParams()
  return (

    <div>
      <h3>Ruban{Name}</h3>
    </div>
    
  )
}

export default Dynamicroute
