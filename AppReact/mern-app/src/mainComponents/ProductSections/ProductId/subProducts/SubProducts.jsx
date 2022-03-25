import React from 'react'
import './SubProducts.css'
import { Link } from 'react-router-dom'
import ImagenPrueba from '../../../ProductSections/cars/images/volkswagen.jpg'

const SubProducts = ({id,price,name}) => {

  return (
    <>
    <div id='SubCardProduct_Container'>
    <Link id='SubCardProduct_Link' to={`/product/buy-product/${id}`}>
        <div id='SubCardProduct_ImagesContainer'><img src={ImagenPrueba} id='SubCardProduct_Images' alt='Product Image'/></div>
        <div id='SubCardProducts_PriceContainer'>
        <p id='SubCardProducts_FinalPrice'>${price}</p>
        </div>
        <p id='SubCardProduct_Name'>{name}</p>
        </Link>
    </div>
    </>
  )
}

export default SubProducts