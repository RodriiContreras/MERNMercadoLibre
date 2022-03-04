import React from 'react'
import {useState,useEffect} from 'react'
import './cardProducts.css'
import ImagenPrueba from '../imagenesprueba/fotoprueba.png'


const  CardProducts = ({price, name, stock}) => {
  const [boolean, setBoolean] = useState(true)
  


  // if(!boolean){
  //   const cardProduct  = document.getElementById('CardProduct_Container')
  //   cardProduct.addEventListener('mouseover',()=>{
  //     let hiddenPrice = document.getElementById('CardProducts_FinalPrice')
  //     hiddenPrice.style.visibility=('visible')
  //   })
  // }


  const revealItems = () =>{
 document.getElementById('CardProduct_Name').style.display='block'
}
 console.log(boolean)
  let PriceDivisor = price / 6
  
  //PRICE rounded 
  let PriceRounded = Math.round(PriceDivisor)

  // Price Of Percent 
  let  PriceOfPercent = 68 * price / 100


  return (
    <>
    <div id='CardProduct_Container' onMouseOver={()=> revealItems() }>
    <a href=''id='CardProduct_Link'>
        <div id='CardProduct_ImagesContainer'><img src={ImagenPrueba} id='CardProduct_Images' alt='Product Image'/></div>
        <div id='CardProducts_PriceContainer'>
          <p id='CardProducts_FinalPrice'>${price}</p>
        <p id='CardProduct_Price'>${PriceOfPercent}</p>
        <p id='CardProduct_PriceOffert'>68% OFF</p>
        </div>
        <p id='CardProduct_PriceInInstallments'>Pay it in 6 x ${PriceRounded}</p>
        <p id='CardProduct_FreeShip'>Free Shipping!</p>
        <p id='CardProduct_Name'>{name}</p>
        </a>
    </div>
    </>
  )
}
//224 x 340
export default CardProducts