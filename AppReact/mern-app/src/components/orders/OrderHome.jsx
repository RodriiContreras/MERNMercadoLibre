
import React from 'react'
import Navbar from '../navbar/Navbar'
import './OrderHome.css'
import { Accordion } from 'react-bootstrap'
import {useContext,useEffect} from 'react'
import { useState } from 'react'
import {AuthContext} from '../Context/AuthContext'
const OrderHome =() => {
  
   const {logData,setLogData} = useContext(AuthContext)
   const [id, setId] = useState()
   const [order, setOrder] = useState()
  console.log(id)

  console.log(order)




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
    .then(resp => setId(resp.msg._id))


     
      fetch(`http://localhost:8080/order/get-ordersByUserID/${id}`)
      .then(resp =>{
        console.log(resp)
        if(resp.ok){
          return resp.json()
        }
      })
      .then(resp => setOrder(resp.msg))
    
    



   }, [id])

   if(!order) return 'no hay archivos'

   
  return (
    <>
     <Navbar/>
     <div id='OrderHome_ContentOrder'>
       { logData.length === undefined ?

    order.map(item =>(
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>{item.order.map(subItem=>(<p>{subItem.name}  - <span style={{'color':'red'}}>{item.state}</span> </p>))}</Accordion.Header>
      <Accordion.Body>
        {item.order.map(items=>(
          <div>
          <p>{items.description}</p>
          <p>Total price : ${items.price}</p>
          </div>
        ))}
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>

  ))
 : 'no hay nada'}
     </div>
    </>
  )
}

export default OrderHome