import React from 'react'
import CarrouselHome from '../components/carrouselHome/CarrouselHome'
import Navbar from '../components/navbar/Navbar'
import Methods from '../components/paymentMethods/Methods'
import ProductosHome from '../components/productosHome/ProductosHome'

const Home = () => {
  return (
   <>
    <Navbar/>
    <CarrouselHome/>
    <Methods/>
    <ProductosHome/>
    </>
  )
}

export default Home