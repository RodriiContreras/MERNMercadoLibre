import React from 'react'
import Background from '../backgroundComponentsLogin/Background'
import './login.css'
import imagen from '../../globalImages/mercado-libre-logo.png'
import { Link } from 'react-router-dom'
import FormFormikLogin from './loginFormik/FormFormikLogin'

const Login = () => {
  return (
    <>  
    <div>
    <div id='Register_FormContainer'>
    <Link to='/'><img id='Register_ImageLogoContainer' src={imagen} /></Link>
    <h1 id='Register_H1'>Log in your account!</h1>
    <FormFormikLogin/>
     </div>
    <Background/>
    </div>
    </>
  )
}

export default Login