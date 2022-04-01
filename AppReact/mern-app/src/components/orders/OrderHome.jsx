
import React from 'react'
import Navbar from '../navbar/Navbar'
import './OrderHome.css'
import { Accordion } from 'react-bootstrap'
import {useContext,useEffect} from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import {AuthContext} from '../Context/AuthContext'
import { Link } from 'react-router-dom'
import Loading from '../loading/loader.gif'
const OrderHome =() => {
  
   const {logData,setLogData} = useContext(AuthContext)
   const [id, setId] = useState()
   const [order, setOrder] = useState()



   useEffect(() => {
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
      }
    })
    .then(resp => {return resp.msg._id})
    .then(resp =>{
      fetch(`http://localhost:8080/order/get-ordersByUserID/${resp}`)
      .then(resp =>{
        console.log(resp)
        if(resp.ok){
          return resp.json()
        }
      })
      .then(resp => setOrder(resp.msg))
    })


    
    
    



   }, [id])

   if(!order)return(<div><Navbar/>
   <div id='Loading_Content'>
   <img id='Loading_Style' src={Loading}/>
   </div>
   </div>)


  const deleteOrder = (e)=>{

   fetch(`http://localhost:8080/order/delete-order/${e}`,{
     method:'DELETE',
   })
   .then(resp =>{
     console.log(resp)
     if(resp.ok){
       return resp.json()
     }
   })
    .then( resp => console.log(resp))
    .catch(err => console.log(err))
  }

   
  return (
    <>
     <Navbar/>
     <div id='OrderHome_ContentOrder'>
       { logData.length === undefined ?

    order.map(item =>(
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>

        {item.order.map(subItem=>(<p key={item._id}>{subItem.name}  - <span style={{'color':'red'}}>
      {item.state}</span></p>))}
       </Accordion.Header>
      <Accordion.Body>

        {item.order.map(items=>(
          <div key={items._id}>
          <p>{items.description}</p>
          <p>Total price : ${68 * items.price/ 100 }</p>

          <Link to='/'><button onClick={()=>deleteOrder(item._id)}
       style={{'background':'none',border:'none'}}><FontAwesomeIcon
        style={{'color':'red',fontSize:'15px'}} icon={faX}/></button></Link>
          </div>

          
        ))}
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>

  ))
 :
 <div>
 <Navbar/>
 <div id='Loading_Content'>
 <img id='Loading_Style' src={Loading}/>
 </div>
 </div>
 }
     </div>
    </>
  )
}

export default OrderHome