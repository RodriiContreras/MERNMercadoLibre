import CarrouselHome from '../components/carrouselHome/CarrouselHome'
import React,{useEffect,useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import Methods from '../components/paymentMethods/Methods'
import ProductosHome from '../components/productosHome/ProductosHome'
import OffersHome from '../components/offersHome/OffersHome'


const Home = () => {


  return (
   <>
    <Navbar/>
    <CarrouselHome/>
    <OffersHome/>
    <Methods/>
    <ProductosHome/>
    </>
  )
}

export default Home