import React from 'react'
import { Formik, Form , Field } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import {useState, useEffect} from 'react'

const FormFormikLogin = () => {
    const [data, setData] = useState([])
    console.log(data)


    useEffect(() => {
    const {email , password} = data;
    console.log(email)
    console.log(password)
    fetch('http://localhost:8080/auth/Login',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body:data})
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .catch(error=> console.log(error))
    }, [data])
    
    const validationSchema = Yup.object({
        email:Yup.string()
        .required('El email es obligatorio'),
        password:Yup.string()
        .required('El email es obligatorio')
    })

  return (
    <div id='Login_ButtonsToRegisterContainer'>
    <div id='Register_FormikContainer'>
           <Formik
              initialValues={{
                email: '',
                password:''
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                  let stringify = JSON.stringify(values)
                setData(stringify)
              }}
            >
              <Form>
      
                <label className='Form_LoginvalidateLabel' htmlFor="email"> Validate E-mail</label>
                <Field id="email" name="email" type='email' placeholder="E-mail " />
      
                 <label className='Form_LoginvalidateLabel' htmlFor="password">Create Password!</label>
                <Field
                  id="password"
                  name="password"
                  placeholder="password"
                  type="password"
                />
                <button id='Register_FormikSubmitButton' type="submit">Submit</button>
                <Link id='Form_LoginLinkRegister' to='/auth/Register'>You dont have an account?</Link>
              </Form>
            </Formik>
            </div>
          </div>
  )
}

export default FormFormikLogin