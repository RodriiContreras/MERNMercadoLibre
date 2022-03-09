import React from 'react'
import { Link } from 'react-router-dom'
import Cellphone from '../images/cellphone.jpeg'
import Tablet from '../images/tablet.jpg'
import Notebook from '../images/notebook.jpg'
import Other from '../images/other.jpg'
import './TechnologyCategories.css'

const TechnologyCategories = () =>{
  return (
    <>
        <div id='CarsCategories_CardContentFlex'>

           <Link className='CarsCategories_Link' to='/buy-products/technology/Cellphone'>
           <div className='CarsCategories_CardBorders'>
               <div className='CarsCategories_CardContent'>
                <img id='CarsCategories_CellphoneLogo'src={Cellphone}/>
             
                </div>
                <div><p className='TechnologyCategories_p'>Cellphone</p></div> 
            </div>
            </Link>

           <Link className='CarsCategories_Link' to='/buy-products/technology/Tablet'>
           <div className='CarsCategories_CardBorders'>
               <div className='CarsCategories_CardContent'>
               <img id='CarsCategories_TabletLogo'src={Tablet}/>
                </div>   
                <div><p className='TechnologyCategories_p'>Tablet</p></div> 

                </div>
            </Link>

           <Link className='CarsCategories_Link' to='/buy-products/technology/Notebook'>
           <div className='CarsCategories_CardBorders'>
               <div className='CarsCategories_CardContent'>
               <img id='CarsCategories_NotebookLogo'src={Notebook}/>
               </div> 
              <div><p className='TechnologyCategories_p'>Notebook</p></div> 
              </div>
            </Link>

           <Link className='CarsCategories_Link' to='/buy-products/technology/Other'>
               <div className='CarsCategories_CardBorders'>
               <div className='CarsCategories_CardContent'>
               <img id='CarsCategories_OtherLogo'src={Other}/>
               </div>
               <div>
                <p className='TechnologyCategories_p'>All Products</p></div> 
                </div>
            </Link>

        </div>
    </>
  )
}

export default TechnologyCategories