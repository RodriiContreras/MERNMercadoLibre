import React from 'react'
import './cardProducts.css'
import ImagenPrueba from '../../../mainComponents/ProductSections/cars/images/volkswagen.jpg'
import { Link } from 'react-router-dom'


const  CardProducts = ({id,price, name }) => {
  let PriceDivisor = price / 6
  console.log(id)
  //PRICE rounded 
  let PriceRounded = Math.round(PriceDivisor)

  // Price Of Percent 
  let  PriceOfPercent = 68 * price / 100


  return (
    <>
    <div id='CardProduct_Container'>
    <Link id='CardProduct_Link' to={`/product/buy-product/${id}`}>
        <div id='CardProduct_ImagesContainer'><img src={ImagenPrueba} id='CardProduct_Images' alt='Product Image'/></div>
        <div id='CardProducts_PriceContainer'>
        <p id='CardProducts_FinalPrice'>${price}</p>
        <p id='CardProduct_Price'>${PriceOfPercent}</p>
        <p id='CardProduct_PriceOffert'>68% OFF</p>
        </div>
        <p id='CardProduct_PriceInInstallments'>Pay it in 6 x ${PriceRounded}</p>
        <p id='CardProduct_FreeShip'>Free Shipping!</p>
        <p id='CardProduct_Name'>{name}</p>
        </Link>
    </div>
    </>
  )
}
//224 x 340
export default CardProducts