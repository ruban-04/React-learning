import React, {memo} from 'react'

function Memo2({val}) {
    console.log("Memo2 re-rendering");
    
  return (
    <div>
      <h1>Memo2 {val}</h1>
    </div>
  )
}

export default memo(Memo2);