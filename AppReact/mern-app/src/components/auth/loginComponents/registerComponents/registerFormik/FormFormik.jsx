import React from 'react'
import {Formik,Form , Field} from 'formik'
import { Link } from 'react-router-dom'
import {useEffect, useState } from 'react'
import * as Yup from 'yup'
const  FormFormik = () => {

   const [booleanPathToLogin, setBooleanPathToLogin] = useState(false)
   const [errorMessage, setErrorMessage] = useState()
   const [successMessage, setSuccessMessage] = useState()
 const SubmitRegister = (stringify) =>{
  fetch("http://localhost:8080/auth/Register" ,{
    method:'POST',
    mode:'cors',
    headers: {
      'Content-Type':'application/json'
    },
    body: stringify})
    .then(resp => resp.json())
    .then(resp =>{
      console.log(resp)
      if(resp.msg === 'Success'){
        setBooleanPathToLogin(true)
        setSuccessMessage(resp)
        setErrorMessage()
      }
      else{
     let errores = resp.errors.map(error =>{
          return error.msg
        })
        setErrorMessage(errores)
      }
    })
  .catch(err => console.log(err))
 }

  const schemaValidation=Yup.object({
  
    name:Yup.string()
    .required('El Nombre es obligatorio'),

    dni:Yup.string()
    .required('El Dni es obligatorio'),
 
    email:
    Yup.string()
    .required('El Email es obligatorio'),

    cellphone:
    Yup.string()
    .required('El Numero de telefono es obligatorio'),

    password:
    Yup.string()
    .required('La contraseña es necesaria')

  });

  return (

    <div id='Register_FormikContainer'>
    <Formik
       initialValues={{
         name:'',
         dni: '',
         email: '',
         cellphone: '',
         password:''
       }}
       validationSchema={schemaValidation}
       onSubmit={async (values) => {
         
         let stringify = JSON.stringify(values)
         SubmitRegister(stringify)
       }}>
         {props =>{
           return(
       <Form onSubmit={props.handleSubmit}>
       <label className='Form_validateLabel' htmlFor="name">Your First Name</label>
         <Field id="dni" name="name" placeholder="Example : Rodrigo" />

         {props.errors.name ?<div className='Form_errorsYupContent'> <p className='Form_errorsYup'>{props.errors.name}</p></div> : null}

         <label className='Form_validateLabel' htmlFor="dni"> Validate Identity Number (DNI)</label>
         <Field value={props.values.dni} onChange={props.handleChange} onBlur={props.handleBlur} id="dni" name="dni" placeholder="Example : 44 365 632" />

         {props.errors.dni ? <div className='Form_errorsYupContent'> <p className='Form_errorsYup'>{props.errors.dni}</p></div> : null}
 
         <label className='Form_validateLabel' htmlFor="email"> Validate E-mail</label>
         <Field value={props.values.email} onChange={props.handleChange} onBlur={props.handleBlur} id="email" name="email" type='email' placeholder="Example: Rodrigolcontreras1317@gmail.com" />

         {props.errors.email ?<div className='Form_errorsYupContent'> <p className='Form_errorsYup'>{props.errors.email}</p></div> : null}
 
         <label className='Form_validateLabel' htmlFor="cellphone">Validate Cellphone</label>
         <Field
         value={props.values.cellphone} onChange={props.handleChange} onBlur={props.handleBlur}
           id="cellphone"
           name="cellphone"
           placeholder="Example: 11 6874 3728"
           type="cellphone"
         />

        {props.errors.cellphone ?<div id='Form_errorsYupContentEmail'> <p className='Form_errorsYup'>{props.errors.cellphone}</p></div> : null}

          <label className='Form_validateLabel' htmlFor="password">Create Password!</label>
         <Field
         value={props.values.password} onChange={props.handleChange} onBlur={props.handleBlur}
           id="password"
           name="password"
           placeholder="Example: Pepito12345"
           type="password"
         />

         {props.errors.password ?<div className='Form_errorsYupContent'> <p className='Form_errorsYup'>{props.errors.password}</p></div>: null}

            {errorMessage &&
            <div id='Form_LoginErrorsContainer'>
                <ul id='Form_LoginErrors'>
                {errorMessage.map( error =>(
                  <li><p id='Form_PLoginError'>{error}</p></li>
                ))}
                </ul>
                </div>
                 } 

                  { successMessage && <div id='Form_LoginSuccessContainer'><p id='Form_PLoginSuccess'>Se ha creado correctamente su usuario</p></div>}

  

  {booleanPathToLogin ? <Link to='/auth/login'><button id='Register_FormikSubmitButton'>Go Login</button></Link>:<button id='Register_FormikSubmitButton' type="submit">Submit</button>  }
   
         <Link id='Register_LinkToLogin' to='/auth/login'>You have an account?</Link>
       </Form>

)
}}
     </Formik>
     </div>
  )
}

export default FormFormik