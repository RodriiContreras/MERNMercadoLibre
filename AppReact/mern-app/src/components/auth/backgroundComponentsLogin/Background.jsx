import React from 'react'
import imagen from '../../globalImages/mercado-libre-logo.png'
import './background.css'

const  Background = () => {
  return (
<div>
     <img id='Register_ImageLogo' src={imagen} />
      <div id='Register_Background'>
     </div>
      <div id='Register_BackgroundOpacity'>
    </div>
</div>
  )
}

export default Background