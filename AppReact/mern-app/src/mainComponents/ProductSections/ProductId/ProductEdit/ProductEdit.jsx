import React,{useEffect,useState,useContext} from 'react'
import { useParams,Link } from 'react-router-dom';
import { AuthContext } from '../../../../components/Context/AuthContext';
import Navbar from '../../../../components/navbar/Navbar';
import Loading from '../../../../components/loading/loader.gif'
import SubProducts from '../subProducts/SubProducts';
import ImagenPrueba from '../../cars/images/volkswagen.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCalendar} from '@fortawesome/free-regular-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {Form,Formik, Field} from 'formik'
import * as Yup from 'yup'

const ProductEdit =() => {
    const [productos, setproductos] = useState([])
    const {productsHistory,setProductsHistory} = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    const {dataAuth} = useContext(AuthContext)
    const [userData, setUserData] = useState()
    const [VendedorID, setVendedorID] = useState()
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
         setVendedorID(resp)
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


      let PriceDivisor = productos.msg.price



      const schemaValidation=Yup.object({
  
        name:Yup.string()
        .max(25)
        .required('Name is required'),
          
        description:
        Yup.string()
        .required('Description is required'),
    
        stock:
        Yup.string()
        .required('Stock is required'),
    
        price:
        Yup.string()
        .required('Price is required')
    
      });

      const categories = [
        { value: 'indumentary', label: 'indumentary' },
        { value: 'cars', label: 'cars' },
        { value: 'technology', label: 'technology'},
        { value: 'supermarket', label: 'supermarket' }
      ]
      

      const editProduct =  async(stringifyValues)=>{
          fetch(`http://localhost:8080/product/update-product/${id}`,{
              method:'PUT',
              mode:'cors',
              headers: {
                'Content-Type':'application/json'
              },
              body: stringifyValues})

              .then(resp => resp.json())

              .then(resp =>{
                console.log(resp)
              .catch(err => console.log(err))
              })
        
          
      }
    


  return (
    <div>
    <Navbar/>
    <div id='CardProducts_ContainerFlex'>
 {productos ?
        <div id='CardProductID_Container'>

        <div id='CardProductID_ImagesContainer'><img src={ImagenPrueba} id='CardProductID_Images' alt='Product Image'/></div> 
        <div id='CardProductsID_PriceContainer'>
        <Formik
        validationSchema={schemaValidation}
        initialValues={{
                name:productos.msg.name,
                description:productos.msg.description,
                category:productos.msg.category,
                stock:productos.msg.stock,
                price:productos.msg.price,
                brand:'',
                user:VendedorID,
                subCategory:'',
              }}
        onSubmit={async (values) => {
            console.log(values)
                 let stringifyValues = JSON.stringify(values)
                 editProduct(stringifyValues)
              }}
        >

        {props => {

      return(
        <Form onSubmit={props.handleSubmit}>
      
    
          <Field value={props.values.name} onChange={props.handleChange} name="name" id='CardProductsID_FinalPrice'
           style={{marginLeft:'5%',borderTop:0,width:'85%',borderLeft:0,borderRight:0,borderBottom:'1px solid blue'}}
            placeholder={`Name - ${productos.msg.name}`}/>
         <div id='CardProduct_PricesContent'>
      
      
         <Field value={props.values.price} onChange={props.handleChange} name="price"
          style={{'marginTop':'20px',marginLeft:'5%',width:'85%',marginBottom:'20px',borderTop:0,borderLeft:0,borderRight:0,borderBottom:'1px solid blue'}}
         placeholder={`Price - $${productos.msg.price}`}/> 
        </div>
     
     
        <Field value={props.values.stock} onChange={props.handleChange}  name="stock"
        style={{marginLeft:'5%',width:'85%',borderTop:0,borderLeft:0,borderRight:0,borderBottom:'1px solid blue'}} 
        placeholder={`Stock - ${productos.msg.stock}`}/>
      
      
        <Field value={props.values.description} onChange={props.handleChange} name="description"
         style={{marginTop:'20px',marginLeft:'5%',height:'50px',width:'85%',borderTop:0,borderLeft:0,borderRight:0,borderBottom:'1px solid blue'}}
          placeholder={`Description - ${productos.msg.description}`}
        />
    
    
    
    
        <Field value={props.values.category} as='select' onChange={props.handleChange} name="category"
        style={{marginTop:'20px',marginLeft:'5%',width:'85%',borderTop:0,borderLeft:0,borderRight:0,borderBottom:'1px solid blue'}}
         placeholder={`Category - ${productos.msg.category}`}>
                
        {categories.map(items=>(
            <option value={items.value}>{items.label}</option>
        ))}  
             
       </Field>


          <div style={{marginLeft:'20%',marginTop:'50px'}}>
              <button type='submit' style={{'backgroundColor':'#3483FA',color:'white',border:'none'}}>Edit Product</button>
              <Link to='/'><button style={{'backgroundColor':'#ea5545',marginLeft:'10px',color:'white',border:'none'}}>Go Back</button></Link>
          </div>

        </Form>
        )}}
  </Formik>


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

         <div id='CardProductID_UserContent'>
          <p id='CardProductID_UserContentP'>User information</p>
          <p id='CardProductID_UserContentUserName'><FontAwesomeIcon style={{'color':'blue'}} icon={faUser}/>   {userData.name}</p>
          <p id='CardProductID_UserContentUserName'><FontAwesomeIcon style={{'color':'blue'}} icon={faPhone}/>  {userData.cellphone} </p>
          <p id='CardProductID_UserContentUserName'><FontAwesomeIcon style={{'color':'blue'}} icon={faCalendar}/> Monday to Friday 9:00hs - 18:00hs</p>
        


        </div> 
        
    </div>
   :''} 
   </div>

    </div>
  )
}

export default ProductEdit