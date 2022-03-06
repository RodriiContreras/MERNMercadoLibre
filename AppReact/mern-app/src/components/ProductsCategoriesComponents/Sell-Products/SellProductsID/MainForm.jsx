import React from 'react'
import { useParams } from 'react-router-dom'
import SellProductsNavbar from '../SellProducts-navbar/SellProductsNavbar'
import {Form,Formik, Field} from 'formik'
import './MainForm.css'
 
const MainForm = () => {
    const {category} = useParams()
   console.log(category)
  return (
   <>
   <SellProductsNavbar/>
   <div id='SubNavbar_BackgroundContent'>
   <div id='Products_FormikContainer'>
   <Formik
              initialValues={{
                email: '',
                password:'',
                description:'',
                category:category,
                stock:''
              }}
              onSubmit={async (values) => {
            console.log(values)
              }}
            >
              <Form>
                <label className='Form_MainvalidateLabel' htmlFor="name">Set name of your Product</label>
                <Field id="Form_email" name="name" type='name' placeholder="Example : Audi R-8" />

                <label className='Form_MainvalidateLabel' htmlFor="description">Set description of your product</label>
                <Field id="Form_description" name="description" type='description' placeholder="Example: Is a mid-engine, 2-seater sports car,etc" />

                <label className='Form_MainvalidateLabel' htmlFor="stock">Set stock of your product</label>
                <Field id="Form_stock" name="stock" type='stock' placeholder="Example : 50" />


                <label className='Form_MainvalidateLabel' htmlFor="price">Insert price of your product</label>
                <Field id="Form_price" name="price" type='price' placeholder="Example : $50000" />
      
                 <label className='Form_MainvalidateLabel' htmlFor="password">Create Password!</label>
                <Field
                  id="Form_password"
                  name="password"
                  placeholder="Example"
                  type="password"
                />

         <button id='Form_FormikSubmitButton' type="submit">Submit</button>
              </Form>
            </Formik>
            </div>
   </div>
    
   </>
  )
}

export default MainForm