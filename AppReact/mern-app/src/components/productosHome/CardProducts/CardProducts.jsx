import React from 'react'
import './cardProducts.css'
import ImagenPrueba from '../imagenesprueba/fotoprueba.png'


const  CardProducts = () => {
  return (
    <>
    <div id='CardProduct_Container'>
    <a href=''id='CardProduct_Link'>
        <div id='CardProduct_ImagesContainer'><img src={ImagenPrueba} id='CardProduct_Images' alt='Product Image'/></div>
        <div id='CardProducts_PriceContainer'>
        <p id='CardProduct_Price'>$ 240</p>
        <p id='CardProduct_PriceOffert'>68% OFF</p>
        </div>
        <p id='CardProduct_PriceInInstallments'>Pay it in 6 x 30$</p>
        <p id='CardProduct_FreeShip'>Free Shipping!</p>
        </a>
    </div>
    </>
  )
}
//224 x 340
export default CardProducts