import React from 'react'
import './Navbar.css'
import meliLatam from './images/meliLatam.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faCartArrowDown,faLocationPin,faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
const Navbar =() => {

  const {dataAuth , setDataAuth} = useContext(AuthContext)
  
    
  console.log(dataAuth)
  return(
    <>
    <div id='navbar_content'>

       <Link to='/' id='Meli_LogoContent'><img src={meliLatam} id='MELI_logo' alt='logo MercaLibre'/></Link>
    


      <div id='searchbox_container'>
        <input id='searchbox_navbar' placeholder='Search Products,marks,and other...'/>
        <Link to=''><FontAwesomeIcon id='searchbox_button' icon={faMagnifyingGlass} /></Link> 
      </div>

        <ul id='landing_listContainer'>
          <li class='landing_subItem'>
            <a className='landing_subItemLink'>Categories <FontAwesomeIcon id='SubItem_ArrowDownIcon' icon={faArrowDown}/></a>
            <div id='landing_desple'>
              <ul id=''>
               <Link to='/buy-products/cars'><li className='landing_despleLi'><div className='landing_despleDiv'>Cars</div></li></Link>
               <Link to='/buy-products/supermarket'><li className='landing_despleLi'><div className='landing_despleDiv'>Supermarket</div></li></Link>
               <Link to='/buy-products/technology'><li className='landing_despleLi'><div className='landing_despleDiv'>Technology</div></li></Link>
               <Link to='/buy-products/indumentary'><li className='landing_despleLi'><div className='landing_despleDiv'>Indumentary</div></li></Link>
               <Link to='/'><li className='landing_despleLi'><div className='landing_despleDiv'>Fitness</div></li></Link>
               <Link to='/'><li className='landing_despleLi'><div className='landing_despleDiv'>Kids</div></li></Link>
              </ul>
              </div>
          </li>
          <li class='landing_subItem'><Link className='landing_subItemLink' to='/buy-products/supermarket'>Supermarket</Link></li>
          <li class='landing_subItem'><Link className='landing_subItemLink' to='/buy-products/indumentary'>Indumentary</Link></li>
          <li class='landing_subItem'><Link className='landing_subItemLink' to=''>History</Link></li>
          <li class='landing_subItem'><Link className='landing_subItemLink' to='/product/sell-Products'>Sell</Link></li>
          <li class='landing_subItem'><Link className='landing_subItemLink' to='/help'>Help</Link></li>
        </ul>

        <div id='navbar_envios'>
         <Link to='/' id='navbar_enviosContainerButton'>
           <FontAwesomeIcon id='navbar_enviosFlecha' icon={faLocationPin}/>
           <p id='envios_parrafo'>Send to <span id='envios_parrafoSpan'>Capital Federal</span></p>
         </Link>
        </div>

        <ul id='navbar_listAuth-Cart'>
          <li class='landing_subItemCart'>{dataAuth.length > 1 ? <Link className='navbar_subItemLink' to='/'> Hi! {dataAuth}</Link> : <Link className='navbar_subItemLink' to='/auth/Register'>Create your Account!</Link> }</li>
          <li class='landing_subItemCart'> {dataAuth.length > 1 ?<></>:<Link className='navbar_subItemLink' to='/auth/Login'>Login</Link>}</li>
          <li class='landing_subItemCart'><Link className='navbar_subItemLink' to='/cart'>My owns</Link></li>
          
           <li class='landing_subItemCart'>
             <Link className='navbar_subItemLink' to='/cart'>
              <FontAwesomeIcon id='navbar_cart' icon={faCartArrowDown}/>
            </Link>
           </li>
        </ul>
     
     </div>
    </>
  )
}

export default Navbar