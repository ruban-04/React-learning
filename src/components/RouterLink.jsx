import React from 'react'
import { Link } from 'react-router-dom'

function RouterLink() {
  return (

    <div>
      <h3>Ruban</h3>
      <ul>
        <li>< Link to="/home">Home</Link></li>
        <li>< Link to="/about">About</Link></li>
        <li>< Link to="/contact">Contact</Link></li>

      </ul>
    </div>
  )
}

export default RouterLink
