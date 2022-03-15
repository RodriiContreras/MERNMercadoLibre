import React from 'react'
import { Link } from 'react-router-dom'
import FordLogo from './images/ford.jpg'
import ChevroletLogo from './images/chevrolet.jpg'
import RenaultLogo from './images/renault.jpg'
import VolkswagenLogo from './images/Volkswagen1.jpg'

const CarsCategories = () =>{
  return (
    <>
        <div id='CarsCategories_CardContentFlex'>

           <Link className='CarsCategories_Link' to='/buy-products/cars/ford'>
           <div className='CarsCategories_CardBorders'>
               <div className='CarsCategories_CardContent'>
                <img id='CarsCategories_FordLogo'src={FordLogo}/>
             
                </div>
                <div><p className='CarsCategories_p'>Ford</p></div> 
            </div>
            </Link>

           <Link className='CarsCategories_Link' to='/buy-products/cars/chevrolet'>
           <div className='CarsCategories_CardBorders'>
               <div className='CarsCategories_CardContent'>
               <img id='CarsCategories_ChevroletLogo'src={ChevroletLogo}/>
                </div>   
                <div><p className='CarsCategories_p'>Chevrolet</p></div> 

                </div>
            </Link>

           <Link className='CarsCategories_Link' to='/buy-products/cars/renault'>
           <div className='CarsCategories_CardBorders'>
               <div className='CarsCategories_CardContent'>
               <img id='CarsCategories_RenaultLogo'src={RenaultLogo}/>
               </div> 
              <div><p className='CarsCategories_p'>Renault</p></div> 
              </div>
            </Link>

           <Link className='CarsCategories_Link' to='/buy-products/cars/volkswagen'>
               <div className='CarsCategories_CardBorders'>
               <div className='CarsCategories_CardContent'>
               <img id='CarsCategories_VolkswagenLogo'src={VolkswagenLogo}/>
               </div>
               <div>
                <p className='CarsCategories_p'>Volkswagen</p></div> 
                </div>
            </Link>

        </div>
    </>
  )
}

export default CarsCategories