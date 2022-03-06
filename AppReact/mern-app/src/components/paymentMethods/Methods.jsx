import React from 'react'
import './methods.css'
import { faCreditCard,faHandHoldingDollar,faMoneyBill,faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
const Methods = () => {
  return (
   <>
   <div id='methodsPayment_container'>
      
       <div id='methodsPayment_group1'>
        <Link to='/' id='methodsPayment_CardContainer' >
        <FontAwesomeIcon id='methodsPayment_card' icon={faCreditCard}/>
        </Link>
        <div>
       <p className='methodsPayment_parraph'>Credit Card</p>
       <Link className='methodsPayment_link' to=''> See banking promotions</Link>
       </div>
       </div> 

       <div>
       <Link  to='' id='methodsPayment_CardContainer'>
        <FontAwesomeIcon id='methodsPayment_card' icon={faCreditCard}/>
        </Link>
       <p className='methodsPayment_parraph'>Debit Card</p>
       <Link className='methodsPayment_link' to=''>Show More</Link>

       </div>

       <div>
       <Link  to='' id='methodsPayment_CardContainer'>
        <FontAwesomeIcon id='methodsPayment_card' icon={faHandHoldingDollar}/>
        </Link>
       <p className='methodsPayment_parraph'>Installments without card</p>
       <Link className='methodsPayment_link' to=''>Know Mercado Crédito</Link>
       </div> 

       <div id='methodsPayment_CardContainerMaster'>
       <Link  to='' id='methodsPayment_CardContainer'>
        <FontAwesomeIcon id='methodsPayment_card' icon={faMoneyBill}/>
        </Link>
       <p className='methodsPayment_parraph'>Cash</p>
       <Link className='methodsPayment_link' to=''>Show More</Link>
       </div> 

       <div id='methodsPayment_CardContainerMasterPlus'>
       <Link  to='' id='methodsPayment_CardContainerPlus'>
        <FontAwesomeIcon id='methodsPayment_card' icon={faCirclePlus}/>
        </Link>
       </div> 
   </div>
   </>
  )
}

export default Methods