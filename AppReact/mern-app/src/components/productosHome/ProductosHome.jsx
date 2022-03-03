import React from 'react'
import './productosHome.css'
import { useEffect, useState} from 'react'
import CardProducts from './CardProducts/CardProducts'

const ProductosHome = () => {
    const [productos, setproductos] = useState([])
    useEffect(() => {
        fetch('/product/buy-products').then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(respJson => setproductos(respJson.msg))
    }, [])
    

    console.log(productos)
  return (
   <>
   <h2 id='h2_productosHome'>Some of our Products</h2>
   <div id='CardProducts_ContainerFlex'>
   <CardProducts/>
   <CardProducts/>
   <CardProducts/>
   <CardProducts/>
   <CardProducts/>
   </div>

   </>
  )
}

export default ProductosHome