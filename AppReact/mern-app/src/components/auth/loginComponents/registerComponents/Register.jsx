import React from 'react'
import './register.css'
import { Formik } from 'formik';
import imagen from '../../../globalImages/mercado-libre-logo.png'



const Register = () =>  {
  return (
    <>
     <div>
         <div id='Register_FormContainer'>
         <img id='Register_ImageLogoContainer' src={imagen} />
         <h2 id='Register_H2'>Register your Account!</h2>
           <div>
               
           </div>
         </div>
         <img id='Register_ImageLogo' src={imagen} />
         <div id='Register_Background'>
        </div>
        <div id='Register_BackgroundOpacity'>
        </div>
     </div>
    </>
  )
}

export default Register