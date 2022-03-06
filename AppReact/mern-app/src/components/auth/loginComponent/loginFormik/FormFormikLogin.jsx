import React from 'react'
import { Formik, Form , Field } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import {useState, useEffect} from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext'

const FormFormikLogin = () => {
    const [data, setData] = useState([])
    const [booleanPath, setBooleanPath] = useState(false)
    const {setDataAuth} = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState()
  

    console.log(errorMessage)

    const LoginSubmit = ()=>{
      fetch('http://localhost:8080/auth/Login',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body:data})
    .then(resp => resp.json())
    .then(resp =>  {
      console.log(resp)
        if(resp.msg === 'Success'){
            setBooleanPath(true)
            localStorage.setItem('token',resp.token)
            setDataAuth(resp.userName)
           setErrorMessage()
        }
        else{
          let erroresMessage = resp.errors.map(error =>{
            if(error.length = 1 ){
              return error.msg
            }
          })
          
          setErrorMessage(erroresMessage)
        }
    })
    .catch(error=> console.log(error))
    }
    
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

              {errorMessage ? 
                <div id='Form_LoginErrorsContainer'>
                <ul id='Form_LoginErrors'>
                {errorMessage.map( error =>(
                  <li><p id='Form_PLoginError'>{error}</p></li>
                ))}
                </ul></div>
                 : ''}

 
               {booleanPath ?<Link to='/'><button id='Register_FormikSubmitButtonSuccess'>Ir al Home</button></Link>:  <button id='Register_FormikSubmitButton' onClick={LoginSubmit} type="submit">Submit</button> }
             
                <Link id='Form_LoginLinkRegister' to='/auth/Register'>You dont have an account?</Link>
              </Form>
            </Formik>
            </div>
          </div>
  )
}

export default FormFormikLogin