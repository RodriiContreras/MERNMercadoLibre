import React, {useState,useEffect} from 'react'
import CarrouselHome from '../../../components/carrouselHome/CarrouselHome'
import Navbar from '../../../components/navbar/Navbar'
import CardProducts from '../../../components/productosHome/CardProducts/CardProducts'
import './cars.css'
import CarsCategories from './CarsCategories'

const CarsSections = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/product/buy-products').then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(respJson => {
           let carsProducts=  respJson.msg.filter(item => item.category === 'cars')
          setProducts(carsProducts)
        })
    }, [])


  return(
      <>
   <Navbar/>
   <CarrouselHome/>

   <CarsCategories/>

   <div id='Products_CarsContainer'>
    {products.map(items => (
        <CardProducts key={items.id} price={items.price} stock={items.stock} name={items.name}/>
    ))} 
   </div>
</>
  )
}

export default CarsSections