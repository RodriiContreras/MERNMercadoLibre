import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar'
import ImagenPrueba from '../cars/images/volkswagen.jpg'
import './ProductById.css'
import Loading from '../../../components/loading/loader.gif'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { AuthContext } from '../../../components/Context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCalendar} from '@fortawesome/free-regular-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import SubProducts from './subProducts/SubProducts'


const ProductById = () => {
    const [productos, setproductos] = useState([])
    const {productsHistory,setProductsHistory} = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    const {dataAuth} = useContext(AuthContext)
    const [userDataID, setUserDataID] = useState()
    const [userData, setUserData] = useState()

    const [subProducts, setSubProducts] = useState([])

    console.log(subProducts)



    const {id} = useParams()

    useEffect(() => {

        fetch(`/product/buy-product/${id}`).then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(respJson =>{
             const {user} = respJson.msg;
             setUserDataID(user)
             setproductos(respJson)
             setProductsHistory([...productsHistory,respJson])
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          });

          fetch(`http://localhost:8080/auth/Get-UserById/${userDataID}`).then(res =>{

            if(res.ok){
              return res.json()
            }
          }).then(respJson =>{
            setUserData(respJson.msg)
          })


          fetch(`http://localhost:8080/product/buy-products`).then(res =>{
            console.log(res)
            if(res.ok){
              return res.json()
            }
          }).then(respJson =>{
             let sliceResp = respJson.msg.slice(0,3)
             setSubProducts(sliceResp)
          })
 
      
    }, [id])




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
      if(dataAuth.length < 1){
        Swal.fire({
          title: 'You have to Login!',
          text: 'Log In',
          icon: 'warning',
          confirmButtonText: 'Ok!'
        })
      }
      else{
        Swal.fire({
          title: 'Good Buy!',
          text: 'Buy successful',
          icon: 'success',
          confirmButtonText: 'Ok!'
        })
      }
    }
    
    const reserveButton = ()=>{
      if(dataAuth.length < 1){
        Swal.fire({
          title: 'You have to Login!',
          text: 'Log In',
          icon: 'warning',
          confirmButtonText: 'Ok!'
        })
      }
      else{
        Swal.fire({
          title: 'Good Reserve!',
          text: 'Reserve successful',
          icon: 'success',
          confirmButtonText: 'Ok!'
        })
      }
    }

      let PriceDivisor = productos.msg.price

      let PriceRounded= Math.round(PriceDivisor)

      let PriceOfPercent = 68 * PriceRounded / 100

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
        <div id='CardProductID_UserConten'>
        <p id='CardProductID_Title'>Other Products</p>
        <div id='CardProductID_ContentFlex'>
           {subProducts.map(item=>(
            <SubProducts id={item._id} price={item.price} name={item.name} />
          ))

          } 
        </div>
        </div>

        <div id='CardProductID_UserContent'>
          <p id='CardProductID_UserContentP'>User information</p>
          <p id='CardProductID_UserContentUserName'><FontAwesomeIcon style={{'color':'blue'}} icon={faUser}/>   {userData.name} {userData.lastname}</p>
          <p id='CardProductID_UserContentUserName'><FontAwesomeIcon style={{'color':'blue'}} icon={faPhone}/>  {userData.cellphone} </p>
          <p id='CardProductID_UserContentUserName'><FontAwesomeIcon style={{'color':'blue'}} icon={faCalendar}/> Monday to Friday 9:00hs - 18:00hs</p>
        </div>

    </div>
   :''} 
   </div>
    </>
  )
}

export default ProductById