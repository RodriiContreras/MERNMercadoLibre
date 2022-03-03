import React from 'react'
import './Navbar.css'
import meliLatam from './images/meliLatam.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faCartArrowDown,faLocationPin} from '@fortawesome/free-solid-svg-icons'
// import { useEffect,useState } from 'react'
const Navbar =() => {

    // useEffect(() => {
    //     fetch('/product/buy-products').then(res =>{
    //         if(res.ok){
    //             return res.json()
    //         }
    //     }).then(jsonresponse => console.log(jsonresponse))
    // },[])
    
  return(
    <>
    <div id='navbar_content'>

      <div>
       <a href=''><img src={meliLatam} id='MELI_logo' alt='logo MercaLibre'/></a>
      </div>


      <div id='searchbox_container'>
        <input id='searchbox_navbar' placeholder='Search Products,marks,and other...'/>
        <a href=''><FontAwesomeIcon id='searchbox_button' icon={faMagnifyingGlass} /></a> 
      </div>

        <ul id='landing_listContainer'>
          <li class='landing_subItem'><a className='landing_subItemLink' href=''>Categories</a></li>
          <li class='landing_subItem'><a className='landing_subItemLink' href=''>Supermarket</a></li>
          <li class='landing_subItem'><a className='landing_subItemLink' href=''>Indumentary</a></li>
          <li class='landing_subItem'><a className='landing_subItemLink' href=''>History</a></li>
          <li class='landing_subItem'><a className='landing_subItemLink' href=''>Sell</a></li>
          <li class='landing_subItem'><a className='landing_subItemLink' href=''>Help</a></li>
        </ul>

        <div id='navbar_envios'>
         <a href='' id='navbar_enviosContainerButton'>
           <FontAwesomeIcon id='navbar_enviosFlecha' icon={faLocationPin}/>
           <p id='envios_parrafo'>Send to <span id='envios_parrafoSpan'>Capital Federal</span></p>
         </a>
        </div>

        <ul id='navbar_listAuth-Cart'>
          <li class='landing_subItemCart'><a className='navbar_subItemLink' href=''>Create your Account!</a></li>
          <li class='landing_subItemCart'><a className='navbar_subItemLink' href=''>Login</a></li>
          <li class='landing_subItemCart'><a className='navbar_subItemLink' href=''>My owns</a></li>
          
           <li class='landing_subItemCart'><a className='navbar_subItemLink' href=''>
              <FontAwesomeIcon id='navbar_cart' icon={faCartArrowDown}/>
            </a>
           </li>
        </ul>
     
     </div>
    </>
  )
}

export default Navbar