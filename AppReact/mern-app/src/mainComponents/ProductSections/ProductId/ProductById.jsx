import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar'
import ImagenPrueba from '../cars/images/volkswagen.jpg'
import './ProductById.css'
import Loading from '../../../components/loading/loader.gif'
import Swal from 'sweetalert2'


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
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          });
    }, [])

    if (loading) {
      return(
        <div>
      <Navbar/>
      <div id='Loading_Content'>
      <img id='Loading_Style' src={Loading}/>
      </div>
      </div>
    )
    }

    const submitButton = ()=>{
      Swal.fire({
        title: 'Good Buy!',
        text: 'Buy successful',
        icon: 'success',
        confirmButtonText: 'Ok!'
      })
    }
    
    const reserveButton = ()=>{
      Swal.fire({
        title: 'Good Reserve!',
        text: 'Reserve successful',
        icon: 'success',
        confirmButtonText: 'Ok!'
      })
    }

      let PriceDivisor = productos.msg.price

      let PriceRounded= Math.round(PriceDivisor)

      let PriceOfPercent = 68 * PriceRounded / 100

      console.log(PriceOfPercent)
      // //PRICE rounded 
      // let PriceRounded = Math.round(PriceDivisor)
    
      // // Price Of Percent 
      // let  PriceOfPercent = 68 * price / 100
    
  return (
    <>
    <Navbar/>
    <div id='CardProducts_ContainerFlex'>
 {productos ?
          <div id='CardProductID_Container'>
   
        <div id='CardProductID_ImagesContainer'><img src={ImagenPrueba} id='CardProductID_Images' alt='Product Image'/></div> 
        <div id='CardProductsID_PriceContainer'>
          <p id='CardProductsID_FinalPrice'>{productos.msg.name}</p>
        <p id='CardProductID_PriceTotal'>${productos.msg.price}</p>
         <div id='CardProduct_PricesContent'>
        <p id='CardProductID_Price'>${PriceOfPercent}</p>
        <p id='CardProductID_Offer'>68% OFF</p>
        </div>
        <div id='CardProductsID_Buttons'>
        <button id='CardProductsID_Submit' onClick={submitButton}>Submit</button>
        <button id='CardProductsID_Reserve' onClick={reserveButton}>Reserve</button>
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