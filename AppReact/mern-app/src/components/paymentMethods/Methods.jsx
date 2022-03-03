import React from 'react'
import './methods.css'
import { faCreditCard,faHandHoldingDollar,faMoneyBill,faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Methods = () => {
  return (
   <>
   <div id='methodsPayment_container'>
      
       <div id='methodsPayment_group1'>
        <a  href='' id='methodsPayment_CardContainer'>
        <FontAwesomeIcon id='methodsPayment_card' icon={faCreditCard}/>
        </a>
        <div>
       <p className='methodsPayment_parraph'>Credit Card</p>
       <a className='methodsPayment_link' href=''> See banking promotions</a>
       </div>
       </div> 

       <div>
       <a  href='' id='methodsPayment_CardContainer'>
        <FontAwesomeIcon id='methodsPayment_card' icon={faCreditCard}/>
        </a>
       <p className='methodsPayment_parraph'>Debit Card</p>
       <a className='methodsPayment_link' href=''>Show More</a>

       </div>

       <div>
       <a  href='' id='methodsPayment_CardContainer'>
        <FontAwesomeIcon id='methodsPayment_card' icon={faHandHoldingDollar}/>
        </a>
       <p className='methodsPayment_parraph'>Installments without card</p>
       <a className='methodsPayment_link' href=''>Know Mercado Crédito</a>
       </div> 

       <div id='methodsPayment_CardContainerMaster'>
       <a  href='' id='methodsPayment_CardContainer'>
        <FontAwesomeIcon id='methodsPayment_card' icon={faMoneyBill}/>
        </a>
       <p className='methodsPayment_parraph'>Cash</p>
       <a className='methodsPayment_link' href=''>Show More</a>
       </div> 

       <div id='methodsPayment_CardContainerMasterPlus'>
       <a  href='' id='methodsPayment_CardContainerPlus'>
        <FontAwesomeIcon id='methodsPayment_card' icon={faCirclePlus}/>
        </a>
       </div> 
   </div>
   </>
  )
}

export default Methods