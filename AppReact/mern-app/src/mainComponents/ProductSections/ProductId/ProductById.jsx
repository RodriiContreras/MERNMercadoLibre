import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar'
import ImagenPrueba from '../cars/images/volkswagen.jpg'
import './ProductById.css'


const ProductById = () => {
    const [productos, setproductos] = useState([])
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
    console.log(productos)
    useEffect(() => {
        fetch(`/product/buy-product/${id}`).then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(respJson =>{
console.log(respJson)
             setproductos(respJson)
        })
        .finally(() => {
            setLoading(false);
          });
    }, [])

    if (loading) {
        return <p>Data is loading...</p>;
      }
    
  return (
    <>
    <Navbar/>
    <div id='CardProducts_ContainerFlex'>
 {productos ?
          <div id='CardProductID_Container'>
   
        <div id='CardProductID_ImagesContainer'><img src={ImagenPrueba} id='CardProductID_Images' alt='Product Image'/></div> 
        <div id='CardProductsID_PriceContainer'>
          <p id='CardProductsID_FinalPrice'>{productos.msg.name}</p>
        <p id='CardProductID_Price'>${productos.msg.price}</p>
        <div id='CardProductsID_Buttons'>
        <button id='CardProductsID_Submit'>Submit</button>
        <button id='CardProductsID_Reserve'>Reserve</button>
        </div>
        <p id='CardProductID_pReserve'>Plus 500 Mercado Points if you reserve!</p>
        <p id='CardProductID_pReserve'>You a problem with this post ?</p>
        <p id='CardProductID_FreeShip'>Free Shipping!</p>
        </div>



  
    </div>
   :''} 
   </div>
    </>
  )
}

export default ProductById