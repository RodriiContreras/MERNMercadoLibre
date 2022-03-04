import React from 'react'
import {Formik,Form , Field} from 'formik'
import { Link } from 'react-router-dom'
const  FormFormik = () => {
  return (

    <div id='Register_FormikContainer'>
    <Formik
       initialValues={{
         dni: '',
         email: '',
         cellphone: '',
         password:''
       }}
       onSubmit={async (values) => {
         await new Promise((r) => setTimeout(r, 500));
         alert(JSON.stringify(values, null, 2));
       }}
     >
       <Form>
         <label className='Form_validateLabel' htmlFor="dni"> Validate Identity Number (DNI)</label>
         <Field id="dni" name="dni" placeholder="Dni" />
 
         <label className='Form_validateLabel' htmlFor="email"> Validate E-mail</label>
         <Field id="email" name="email" type='email' placeholder="E-mail " />
 
         <label className='Form_validateLabel' htmlFor="cellphone">Validate Cellphone</label>
         <Field
           id="cellphone"
           name="cellphone"
           placeholder="Cellphone"
           type="cellphone"
         />

          <label className='Form_validateLabel' htmlFor="password">Create Password!</label>
         <Field
           id="password"
           name="password"
           placeholder="Password"
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