import React from 'react'
import './SellProducts.css'
import { Link } from 'react-router-dom'
const SellProductsAuth = () => {
  return (
    <>
    <div id='Auth_Container'>
     <h1>First, you have to Log-In with your account</h1>
     <Link id='Auth_LinkToLogin' to='/auth/login'>Go to Login</Link>
     <Link id='Auth_LinkToRegister' to='/auth/register'>You dont have an account?</Link>
    </div>
    </>
  )
}

export default SellProductsAuth