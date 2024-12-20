import React, { useState } from 'react'

import Memo1 from './Memo1'
import Memo2 from './Memo2'

function Mainmemo() {

  const [memo1Val, setmemo1] = useState(5)
  const [memo2Val, setmemo2] = useState(10)
  
  function changememo1(){
    setmemo1(memo1Val + 1)
  }
  function changememo2(){
    setmemo2(memo2Val + 1)
  }

  return (
    <div style={{justifySelf:'center'}}>

      <h1>Learning React.memo()</h1>
      <button onClick={changememo1}>Memo1 Button</button>
      <button onClick={changememo2}>Memo2 Button</button>
      <Memo1 val={memo1Val}/>
      <Memo2 val={memo2Val}/>
      
    </div>
  )
}
export default Mainmemo
