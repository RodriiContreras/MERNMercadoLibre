import React from 'react'
import Background from '../backgroundComponentsLogin/Background'
import './login.css'
import imagen from '../../globalImages/mercado-libre-logo.png'
import { Link } from 'react-router-dom'
import { Formik, Form , Field } from 'formik'


const Login = () => {
  return (
    <>  
    <div>
    <div id='Register_FormContainer'>
    <Link to='/'><img id='Register_ImageLogoContainer' src={imagen} /></Link>
    <h1 id='Register_H1'>Log in your account!</h1>
    <div id='Login_ButtonsToRegisterContainer'>
      <div id='Register_FormikContainer'>
             <Formik
                initialValues={{
                  email: '',
                  password:''
                }}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500));
                  alert(JSON.stringify(values, null, 2));
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
     </div>
    <Background/>
    </div>
    </>
  )
}

export default Login