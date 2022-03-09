import React from 'react'
import { Link } from 'react-router-dom'
import Golosinas from '../images/Golosinas.jpg'
import Almacen from '../images/Almacen.jpg'
import Gaseosas from '../images/Gaseosas.jpg'
import Baby from '../images/baby.jpg'

const SupermarketCategories = () => {
  return (
   <>
   <div id='CarsCategories_CardContentFlex'>

    <Link className='CarsCategories_Link' to='/buy-products/supermarket/Candies'>
    <div className='CarsCategories_CardBorders'>
        <div className='CarsCategories_CardContent'>
         <img id='CarsCategories_TshirtLogo'src={Golosinas}/>
      
         </div>
         <div><p className='CarsCategories_p'>Candies</p></div> 
     </div>
     </Link>
    
    <Link className='CarsCategories_Link' to='/buy-products/supermarket/Food and Drink'>
    <div className='CarsCategories_CardBorders'>
        <div className='CarsCategories_CardContent'>
        <img id='CarsCategories_JacketsLogo'src={Almacen}/>
         </div>   
         <div><p className='CarsCategories_p'>Home Food</p></div> 
    
         </div>
     </Link>
    
    <Link className='CarsCategories_Link' to='/buy-products/supermarket/Food and Drink'>
    <div className='CarsCategories_CardBorders'>
        <div className='CarsCategories_CardContent'>
        <img id='CarsCategories_JeansLogo'src={Gaseosas}/>
        </div> 
       <div><p className='CarsCategories_p'>Drink Products</p></div> 
       </div>
     </Link>
    
    <Link className='CarsCategories_Link' to='/buy-products/supermarket/Babys'>
        <div className='CarsCategories_CardBorders'>
        <div className='CarsCategories_CardContent'>
        <img id='CarsCategories_ShoesLogo'src={Baby}/>
        </div>
        <div>
         <p className='CarsCategories_p'>Baby Products</p></div> 
         </div>
     </Link>
    
    </div>
   </>
  )
}

export default SupermarketCategories