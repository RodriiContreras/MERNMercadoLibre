import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar ,faShirt,faCartShopping,faMicrochip} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './SubNavbar.css'
import { Link , useParams } from 'react-router-dom'
const SubNavbar = () => {

  return (
    <div id='SubNavbar_BackgroundContent'>
        <h1 id='SubNavbar_h1'>¡Hi! Antes que nada contanos , ¿qué vas a publicar?</h1>


        <div id='SellProducts_ContentFlex'>
          
          
       <Link id='SellProducts_SubitemCard' to='/product/sell-Products/indumentary'>
       <div>
         <div className='SellProducts_SubItemCardContainer'>
         <FontAwesomeIcon className='SellProducts_SubitemIconCard' icon={faShirt}/>
         <p className='SellProducts_SubitemPCard'>Indumentary</p>
         </div>
       </div>
       </Link>

       <Link id='SellProducts_SubitemCard' to='/product/sell-Products/cars'>
       <div >
       <div className='SellProducts_SubItemCardContainer'>
       <FontAwesomeIcon className='SellProducts_SubitemIconCard' icon={faCar}/>
          <p className='SellProducts_SubitemPCard'>Cars</p>
          </div>
       </div>
       </Link>

       <Link id='SellProducts_SubitemCard' to='/product/sell-Products/supermarket'>
       <div> 
       <div className='SellProducts_SubItemCardContainer'>
       <FontAwesomeIcon className='SellProducts_SubitemIconCard' icon={faCartShopping}/>
          <p className='SellProducts_SubitemPCard'>Supermarket</p>
        </div>
       </div>
       </Link>


       <Link id='SellProducts_SubitemCard' to='/product/sell-Products/technology'>
       <div >
         <div className='SellProducts_SubItemCardContainer'>
       <FontAwesomeIcon className='SellProducts_SubitemIconCard' icon={faMicrochip}/>
          <p className='SellProducts_SubitemPCard'>Technology</p>
          </div>
       </div>
       </Link>
     </div>
    </div>
  )
}

export default SubNavbar