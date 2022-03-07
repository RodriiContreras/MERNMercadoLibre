import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import SellProductsNavbar from '../SellProducts-navbar/SellProductsNavbar'
import {Form,Formik, Field} from 'formik'
import * as Yup from 'yup'
import './MainForm.css'
 
const MainForm = () => {
    const {category} = useParams()
    const [valuesJSON, setValuesJSON] = useState([])
   console.log(category)
   console.log(valuesJSON)

   const SubmitCreateProduct = () =>{
    fetch("http://localhost:8080/product/sell-Products" ,{
      method:'POST',
      mode:'cors',
      headers: {
        'Content-Type':'application/json'
      },
      body: valuesJSON})
      .then(resp => resp.json())
      .then(resp =>{
        console.log(resp)
      })
    .catch(err => console.log(err))
   }


   const schemaValidation=Yup.object({
  
    name:Yup.string()
    .required('Name is required'),

    description:
    Yup.string()
    .required('Description is required'),

    stock:
    Yup.string()
    .required('Stock is required'),

    price:
    Yup.string()
    .required('Price is required')

  });

  return (
   <>
   <SellProductsNavbar/>
   <div id='SubNavbar_BackgroundContent'>
   <div id='Products_FormikContainer'>
   <Formik
              initialValues={{
                name:'',
                description:'',
                category:category,
                stock:'',
                price:'',
                user:'62164e387658b8f09f9c36d8'
              }}
              validationSchema={schemaValidation}
              onSubmit={async (values) => {
                let stringifyValues = JSON.stringify(values)
                setValuesJSON(stringifyValues)
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

         <button id='Form_FormikSubmitButton' type="submit" onClick={SubmitCreateProduct} >Submit</button>
              </Form>
            </Formik>
            </div>
   </div>
    
   </>
  )
}

export default MainForm