import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = ()=> {
  return (
    <div id='Footer_Container'>
    <div id='Footer_ContainerFlex'>
       <Link className='SubItem_Link' to='/'><p>Join us</p></Link>
       <Link className='SubItem_Link' to='/'><p>Terms and conditions</p></Link>
       <Link className='SubItem_Link' to='/'><p>Help</p></Link>
       <Link className='SubItem_Link' to='/'><p>Join us</p></Link>
       <Link className='SubItem_Link' to='/'><p>Información al usuario financiero</p></Link>
       <Link className='SubItem_Link' to='/'><p>Información sobre seguros</p></Link>
       <Link className='SubItem_Link' to='/'><p>Información al usuario</p></Link>
       <Link className='SubItem_Link' to='/'><p>Como cuidamos tu privacidad</p></Link>
    </div>
    <p id='Footer_Copyright'>Copyright © 2022 Rodrigo Contreras</p>
    <p id='Footer_Project'>Project "MERNCADOLIBRE" with MERN Stack</p>
  
    </div>
  )
}

export default Footer