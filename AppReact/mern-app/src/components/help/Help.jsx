import React from 'react'
import SellProductsNavbar from '../ProductsCategoriesComponents/Sell-Products/SellProducts-navbar/SellProductsNavbar'
import './help.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBagShopping,faArrowAltCircleLeft,faQuestionCircle,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Help() {
  return (
      <>
    <SellProductsNavbar>
    </SellProductsNavbar>
         <h1 id='Help_h1'>What we will help you?</h1>

         <div id='searchbox_containerHelp'>
        <input id='searchbox_navbarHelp' placeholder='Search Products,marks,and other...'/>
        <Link to=''><FontAwesomeIcon id='searchbox_buttonHelp' icon={faMagnifyingGlass} /></Link> 
       </div>

         <h2 id='Help_h2'>Buys</h2>
         <div id='Help_DivContent'>
               <a href=''id='Help_DivLink'>
                    <div id='Help_DivSubContent'>
                       <FontAwesomeIcon id='Help_DivSubIcon'  icon={faBagShopping}/>
                       <p id='Help_DivSubContentP'>Adm and cancel ur buys</p>
                       <p id='Help_DivSubContentP2'>Pay,follow ship, modify, ask or cancel buys</p>
                    </div>
                </a>

               <a href='' id='Help_DivLink'>
                    <div id='Help_DivSubContent'>
                    <FontAwesomeIcon id='Help_DivSubIcon'  icon={faArrowAltCircleLeft}/>
                       <p id='Help_DivSubContentP'>Adm and cancel ur buys</p>
                       <p id='Help_DivSubContentP2'>Pay,follow ship, modify, ask or cancel buys</p>
                    </div>
                </a>

               <a href=''id='Help_DivLink'>
                    <div id='Help_DivSubContent'>
                    <FontAwesomeIcon id='Help_DivSubIcon'  icon={faQuestionCircle}/>
                       <p id='Help_DivSubContentP'>Adm and cancel ur buys</p>
                       <p id='Help_DivSubContentP2'>Pay,follow ship, modify, ask or cancel buys</p>
                    </div>
                </a>
         </div>
         <h3 id='Help_h3'>Sells</h3>
         <div id='Help_DivContent'>
               <a href=''id='Help_DivLink'>
                    <div id='Help_DivSubContent'>
                    <FontAwesomeIcon id='Help_DivSubIcon'  icon={faBagShopping}/>
                       <p id='Help_DivSubContentP'>Adm and cancel ur buys</p>
                       <p id='Help_DivSubContentP2'>Pay,follow ship, modify, ask or cancel buys</p>
                    </div>
                </a>

               <a href='' id='Help_DivLink'>
                    <div id='Help_DivSubContent'>
                    <FontAwesomeIcon id='Help_DivSubIcon'  icon={faQuestionCircle}/>
                       <p id='Help_DivSubContentP'>Adm and cancel ur buys</p>
                       <p id='Help_DivSubContentP2'>Pay,follow ship, modify, ask or cancel buys</p>
                    </div>
                </a>
         </div>

      </>
  )
}

export default Help