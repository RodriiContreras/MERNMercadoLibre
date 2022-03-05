import React from 'react'
import './sellProductsNavbar.css'
import {Link} from 'react-router-dom'
import meliLatam from '../../../navbar/images/meliLatam.png'

function SellProductsNavbar() {
  return(
    <>
    <div id='SellProductsNavbar_content'>
    <div>
       <Link to='/'><img src={meliLatam} id='SellProductsNavbarMELI_logo' alt='logo MercaLibre'/></Link>
    </div>
    </div>
    </>
  )
}

export default SellProductsNavbar