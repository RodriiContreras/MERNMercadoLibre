import React from 'react'
import { Link } from 'react-router-dom'
import './IndumentaryCategories.css'
import Tshirt from '../images/clothes.jpg'
import Jackets from '../images/Jackets.jpg'
import Jeans from '../images/Jeans.jpg'
import Shoes from '../images/Shoes.jpeg'


const IndumentaryCategories = () => {
  return (
    <>
    <div id='CarsCategories_CardContentFlex'>

<Link className='CarsCategories_Link' to='/buy-products/indumentary/T-Shirt'>
<div className='CarsCategories_CardBorders'>
    <div className='CarsCategories_CardContent'>
     <img id='CarsCategories_TshirtLogo'src={Tshirt}/>
  
     </div>
     <div><p className='CarsCategories_p'>T-Shirts</p></div> 
 </div>
 </Link>

<Link className='CarsCategories_Link' to='/buy-products/indumentary/Jacket'>
<div className='CarsCategories_CardBorders'>
    <div className='CarsCategories_CardContent'>
    <img id='CarsCategories_JacketsLogo'src={Jackets}/>
     </div>   
     <div><p className='CarsCategories_p'>Jackets</p></div> 

     </div>
 </Link>

<Link className='CarsCategories_Link' to='/buy-products/indumentary/Shoes'>
<div className='CarsCategories_CardBorders'>
    <div className='CarsCategories_CardContent'>
    <img id='CarsCategories_JeansLogo'src={Shoes}/>
    </div> 
   <div><p className='CarsCategories_p'>Shoes</p></div> 
   </div>
 </Link>

<Link className='CarsCategories_Link' to='/buy-products/indumentary/Jeans'>
    <div className='CarsCategories_CardBorders'>
    <div className='CarsCategories_CardContent'>
    <img id='CarsCategories_ShoesLogo'src={Jeans}/>
    </div>
    <div>
     <p className='CarsCategories_p'>Jeans</p></div> 
     </div>
 </Link>

</div>
    </>
  )
}

export default IndumentaryCategories