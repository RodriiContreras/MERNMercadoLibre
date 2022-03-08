import React,{useState,useEffect} from 'react'
import CarrouselHome from '../../../components/carrouselHome/CarrouselHome'
import Navbar from '../../../components/navbar/Navbar'
import CardsSupermarket from './CardsSupermarket/CardsSupermarket'

const  SupermarketSection =() => {

    const [products, setProducts] = useState([])
     console.log(products)
    useEffect(() => {
        fetch('/product/buy-products').then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(respJson => {
           let supermarketProducts = respJson.msg.filter(item => item.category === 'supermarket')
          setProducts(supermarketProducts)
        })
    }, [])


  return (
    <>
    <Navbar/>
    <CarrouselHome/>


    <div id='Products_CarsContainer'>
     {products.map(items => (
        <CardsSupermarket key={items.id} price={items.price} stock={items.stock} name={items.name}/>
    ))}  
   </div>
    </>

  )
}


export default SupermarketSection