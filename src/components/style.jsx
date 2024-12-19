import React from 'react'

import Style from './demo.module.css'

function style() {
    const head = {
        color:'green'
    }
  return (
    <div>

        {/* inline */}
      <h1 style={{color:'pink'}}>What is Javascript ?</h1>

      {/* internal */}
      <h4 style={head}>Javascript is a most popular programming language.</h4>

      {/* external */}
      <h4 className='ex'>It is easy to learn</h4>
      {/* modules */}
      <h4 className={Style.external}>javascript is a multipage Application.</h4>

    </div>
  )
}

export default style
