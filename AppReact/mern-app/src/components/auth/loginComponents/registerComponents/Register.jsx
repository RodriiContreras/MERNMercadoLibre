import React from 'react'
import './register.css'
import imagen from '../../../globalImages/mercado-libre-logo.png'
import {Link } from  'react-router-dom'
import Background from '../../backgroundComponentsLogin/Background'
import FormFormik from './registerFormik/FormFormik'




const Register = () =>  {
  return (
    <>
     <div>
         <div id='Register_FormContainer'>
        <Link to='/'><img id='Register_ImageLogoContainer' src={imagen} /></Link>
         <h1 id='Register_H1'>Register your Account!</h1>
           <div id='Register_ButtonsToRegisterContainer'>
             <h2 id='Register_h2Container'>Your Data</h2>
             <p id='Register_pContainer'>Validate your data and any can login or create an account with your data</p>
             <FormFormik/>
           </div>
         </div>
         <Background/>
     </div>
    </>
  )
}

export default Register