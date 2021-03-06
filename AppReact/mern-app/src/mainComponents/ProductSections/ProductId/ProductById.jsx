import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar'
import ImagenPrueba from '../cars/images/volkswagen.jpg'
import './ProductById.css'
import Loading from '../../../components/loading/loader.gif'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { AuthContext } from '../../../components/Context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCalendar} from '@fortawesome/free-regular-svg-icons'
import {faPhone,faPenToSquare,faX} from '@fortawesome/free-solid-svg-icons'
import SubProducts from './subProducts/SubProducts'


const ProductById = () => {
    const [productos, setproductos] = useState([])
    const {productsHistory,setProductsHistory} = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    const {dataAuth} = useContext(AuthContext)
    const [userData, setUserData] = useState()
    const [quantity, setQuantity] = useState(0)

    const {logData} = useContext(AuthContext)

    const [DataUserInLog, setDataUserInLog] = useState()
    
    console.log(userData)
    console.log(DataUserInLog)


    const [subProducts, setSubProducts] = useState([])




    const {id} = useParams()

    useEffect( async() => {

        fetch(`/product/buy-product/${id}`).then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(respJson =>{
             const {user} = respJson.msg;
             console.log(respJson.msg)
             setproductos(respJson)
             setProductsHistory([...productsHistory,respJson])
             return user
        })
        .then(resp =>{
          fetch(`http://localhost:8080/auth/Get-UserById/${resp}`).then(res =>{
            if(res.ok){
              return res.json()
            }
          }).then(respJson =>{
            setUserData(respJson.msg)
            console.log(respJson)
            console.log(respJson.msg)
          })
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          });


     

      
          const stringify = JSON.stringify({email:logData.email})
          console.log(stringify)
          fetch('http://localhost:8080/auth/Get-UserByEmail',{
            method:'POST',
            mode:'cors',
            headers:{
            "Content-Type":"application/json"
            },
            body:stringify
          }).then(resp =>{
            if(resp.ok){
              return resp.json()
            }})
            .then(resp => setDataUserInLog(resp.msg._id))



          fetch(`http://localhost:8080/product/buy-products`).then(res =>{
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

    const submitButton = async ()=>{
      if(dataAuth.length < 1){
        Swal.fire({
          title: 'You have to Login!',
          text: 'Log In',
          icon: 'warning',
          confirmButtonText: 'Ok!'
        })
      }
      else{
        const {name,description,price,_id} = productos.msg;
       const orderArray=
       {
         order:[{name:name,description:description,price:68 * price * quantity/ 100}],
         productID:_id,
         quantity:quantity,
         user:DataUserInLog,
         total:68 * price * quantity / 100,
         create:Date.now(),
         state:'Pendiente'
       }
       

       const orderArrayStringify = await JSON.stringify(orderArray)
        fetch(`/order/add-order`,{
          method:'POST',
          mode:'cors',
          headers: {
            'Content-Type':'application/json'
          },
          body:orderArrayStringify
        }).then(resp=>resp.json())
        .then(resp=>{
          console.log(resp)
          if(resp.msg === 'Your order exceeds stock'){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Your order exceed stock!',
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

   const deleteProduct = ()=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8080/product/delete-product/${id}`,{
          method:'DELETE'
        })
        .then(resp=>{
          console.log(resp)
          if(resp.ok){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
    })
   }

   const moreQuantity = ()=>{
    setQuantity(quantity + 1)
    
    if(quantity === 10){
      setQuantity(quantity + 0)
    }
   }
   const lessQuantity = ()=>{
    setQuantity(quantity - 1)

    if(quantity === 0){
      setQuantity(quantity + 0)
    }
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
        <p id='CardProductID_PriceTotal'>${productos.msg.price}</p>
         <div id='CardProduct_PricesContent'>
        <p id='CardProductID_Price'>${PriceOfPercent}</p>
        <p id='CardProductID_Offer'>68% OFF</p>
        </div>

       
        <div id='CardProduct_QuantityContent'>
          <button className='CardProduct_QuantityButton' onClick={moreQuantity}> + </button>
          <p id='CardProduct_QuantityState'>   {quantity}   </p>
          <button className='CardProduct_QuantityButton'  onClick={lessQuantity}> - </button>
        </div>
        <div id='CardProductsID_Buttons'>
        <button id='CardProductsID_Submit' onClick={submitButton}>Submit</button>
        <button id='CardProductsID_Reserve' onClick={reserveButton}>Reserve</button>
        </div>
        <p id='CardProductID_pReserve'>Plus 500 Mercado Points if you reserve!</p>
        <p id='CardProductID_pReserve'>You a problem with this post ?</p>
        <p id='CardProductID_FreeShip'>Free Shipping!</p>
        </div>
        <div id='CardProductID_UserContent'>
        <p id='CardProductID_Title'>Other Products</p>
        <div id='CardProductID_ContentFlex'>
           {subProducts.map(item=>(
            <SubProducts id={item._id} price={item.price} name={item.name} />
          ))

          } 
        </div>
        </div>

         <div id='CardProductID_UserContentent'>
          <p id='CardProductID_UserContentP'>User information</p>
         
          <div id='UserContent_NameContent'><p id='CardProductID_UserContentUserName'><FontAwesomeIcon style={{'color':'blue'}} icon={faUser}/> Username <span style={{color:'gray',marginLeft:'20px'}}>{userData.name}</span></p></div>
         
          <div id='UserContent_CellphoneContent'><p  id='CardProductID_UserContentUserName'><FontAwesomeIcon style={{'color':'blue'}} icon={faPhone}/> Cellphone <span style={{color:'gray',marginLeft:'20px'}}> {userData.cellphone} </span></p></div>
        
         <div id='UserContent_CalendarContent'><p id='CardProductID_UserContentUserName'><FontAwesomeIcon style={{'color':'blue'}} icon={faCalendar}/> Customer Support <span style={{color:'gray',marginLeft:'20px'}}>Monday to Friday 9:00hs - 18:00hs</span></p></div>
        
        
        
 { userData._id === DataUserInLog ?
        <div style={{'display':'flex','width':'100%',marginTop:'50px','justifyContent':'center'}}>
        <Link to={`/product/update-product/${id}`} id='Crud_Edit' ><FontAwesomeIcon className='Crud_Buttons' icon={faPenToSquare}/></Link>
        <button id='Crud_Delete' onClick={deleteProduct} ><FontAwesomeIcon className='Crud_Buttons' icon={faX}/></button>
        </div>
  : null} 


        </div> 
        

        <div id='CardProductID_DescriptionContainer'>
          <p id='CardProductID_DescriptionTitle'>Description</p>
          <p id='CardProductID_Description'>{productos.msg.description}</p>
        </div>
    </div>
   :''} 


   </div>
    </>
  )
}

export default ProductById