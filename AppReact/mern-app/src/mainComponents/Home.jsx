import CarrouselHome from '../components/carrouselHome/CarrouselHome'
import React,{useEffect,useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import Methods from '../components/paymentMethods/Methods'
import ProductosHome from '../components/productosHome/ProductosHome'


const Home = () => {

  const [productos, setproductos] = useState([])
  useEffect(() => {
      fetch('/product/buy-products').then(res =>{
          if(res.ok){
              return res.json()
          }
      }).then(respJson =>{
          const almacenador = respJson.msg.slice(0,5)
           setproductos(almacenador)
      })
  }, [])

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