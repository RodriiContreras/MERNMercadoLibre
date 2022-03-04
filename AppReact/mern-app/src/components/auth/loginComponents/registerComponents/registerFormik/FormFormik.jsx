import React from 'react'
import {Formik,Form , Field} from 'formik'
import { Link } from 'react-router-dom'
import {useEffect, useState } from 'react'
import * as Yup from 'yup'
const  FormFormik = () => {
   const [data, setData] = useState([])

console.log(data)
   useEffect(() => {
    fetch("http://localhost:8080/auth/Register" ,{
      method:'POST',
      mode:'cors',
      headers: {
        'Content-Type':'application/json'
      },
      body: data})
      .then(resp => resp.json())
      .then(resp => console.log(resp))

      .catch(err => console.log(err))
 }, [data])

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
        setData(stringify)
       }}>
       <Form>
       <label className='Form_validateLabel' htmlFor="name">Your First Name</label>
         <Field id="dni" name="name" placeholder="Example : Rodrigo" />

         <label className='Form_validateLabel' htmlFor="dni"> Validate Identity Number (DNI)</label>
         <Field id="dni" name="dni" placeholder="Example : 44 365 632" />
 
         <label className='Form_validateLabel' htmlFor="email"> Validate E-mail</label>
         <Field id="email" name="email" type='email' placeholder="Example: Rodrigolcontreras1317@gmail.com" />
 
         <label className='Form_validateLabel' htmlFor="cellphone">Validate Cellphone</label>
         <Field
           id="cellphone"
           name="cellphone"
           placeholder="Example: 11 6874 3728"
           type="cellphone"
         />

          <label className='Form_validateLabel' htmlFor="password">Create Password!</label>
         <Field
           id="password"
           name="password"
           placeholder="Example: Pepito12345"
           type="password"
         />

         <button id='Register_FormikSubmitButton' type="submit">Submit</button>
         <Link id='Register_LinkToLogin' to='/auth/login'>You already Have an account?</Link>
       </Form>
     </Formik>
     </div>
  )
}

export default FormFormik