import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Navbar from '../navbar/Navbar'
import CardProducts from '../productosHome/CardProducts/CardProducts'
import SellProductsAuth from '../ProductsCategoriesComponents/Sell-Products/SellProducts-navbar/SellProducts-Authenticate/SellProductsAuth'
import './History.css'


function History() {
    const {productsHistory} = useContext(AuthContext)
    const {dataAuth , setDataAuth} = useContext(AuthContext)
    console.log(productsHistory)
  

    if(!productsHistory){
        return null
    }
   
  return (
    <div>
        <Navbar/>
        <h1 id='History_H1'>Your History</h1>
        <div id='History_ProductsHistory'>


          {dataAuth.length > 0 ?  
        
           productsHistory.length > 0 ? 
              productsHistory.map(item =>(
                 <CardProducts id={item.msg._id} key={item.msg._id} price={item.msg.price} name={item.msg.name}/>
              ))
              : <div id='History_ProductWithoutHistory'><h2>You dont have history</h2></div>
             
             : <SellProductsAuth/>}
        </div>
    </div>
  )
}

export default History