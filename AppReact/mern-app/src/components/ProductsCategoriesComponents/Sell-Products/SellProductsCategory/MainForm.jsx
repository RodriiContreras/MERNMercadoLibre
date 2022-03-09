import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import SellProductsNavbar from '../SellProducts-navbar/SellProductsNavbar'
import {Form,Formik, Field} from 'formik'
import * as Yup from 'yup'
import './MainForm.css'
import { Link } from 'react-router-dom'

const MainForm = () => {
    const {category} = useParams()
    const [booleanLink, setbooleanLink] = useState(false)

   const SubmitCreateProduct = (stringifyValues) =>{
    fetch("http://localhost:8080/product/sell-Products" ,{
      method:'POST',
      mode:'cors',
      headers: {
        'Content-Type':'application/json'
      },
      body: stringifyValues})
      .then(resp => resp.json())
      .then(resp =>{
        console.log(resp)
        setbooleanLink(resp)
      })
    .catch(err => console.log(err))
   }


   
const optionsCars = [
  { value: 'ford', label: 'Ford' },
  { value: 'volkswagen', label: 'Volkswagen' },
  { value: 'chevrolet', label: 'Chevrolet' },
  { value: 'renault', label: 'Renault' },
  { value: '', label: 'Other' }
]

const optionsIndumentary = [
  { value: 'nike', label: 'Nike' },
  { value: 'adidas', label: 'Adidas' },
  { value: 'gucci', label: 'Gucci' },
  { value: 'puma', label: 'Puma' },
  { value: '', label: 'Other' }
]

const optionsTechnology = [
  { value: 'sony', label: 'Sony' },
  { value: 'lenovo', label: 'Lenovo' },
  { value: 'asus', label: 'Asus' },
  { value: 'hp', label: 'Hp' },
  { value: '', label: 'Other' }
]

const optionsSupermarket = [
  { value: 'Marolio', label: 'Marolio' },
  { value: 'Arcor', label: 'Arcor' },
  { value: 'Serenisima', label: 'Serenisima' },
  { value: 'Nestle', label: 'Nestle' },
  { value: '', label: 'Other' }
]

const optionsSupermarketSubCategory = [
  { value: 'Food and Drink', label: 'Food and Drink' },
  { value: 'Babys', label: 'Babys' },
  { value: 'Health and healthy equipment', label: 'Health and healthy equipment' },
  { value: 'Pets', label: 'Pets' },
  { value: '', label: 'Other' }
]

const optionsIndumentarySubCategory = [
  { value: 'T-Shirt', label: 'T-Shirt' },
  { value: 'Shoes', label: 'Shoes' },
  { value: 'Jacket', label: 'Jacket'},
  { value: 'Jeans', label: 'Jeans' },
  { value: '', label: 'Other' }
]

const optionsCarsSubCategory = [
  { value: 'Car', label: 'Car' },
  { value: 'Motorbike', label: 'Motorbike' },
  { value: 'Bike', label: 'Bike'},
  { value: '', label: 'Other' }
]

const optionsTechnologySubCategory = [
  { value: 'Tablet', label: 'Tablet' },
  { value: 'Notebook', label: 'Notebook' },
  { value: 'Cellphone', label: 'Cellphone'},
  { value: '', label: 'Other' }
]






   const schemaValidation=Yup.object({
  
    name:Yup.string()
    .max(25)
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
                brand:'',
                user:'62164e387658b8f09f9c36d8',
                subCategory:'',
              }}
              validationSchema={schemaValidation}
              onSubmit={async (values) => {
                let stringifyValues = JSON.stringify(values)
                console.log(stringifyValues)
                SubmitCreateProduct(stringifyValues)
              }}
            >

              {props => {

                return(
              <Form onSubmit={props.handleSubmit}>
                <label className='Form_MainvalidateLabel' htmlFor="name">Set name of your Product</label>
                <Field value={props.values.name} onChange={props.handleChange} onBlur={props.handleBlur} id="Form_email"  name="name" type='name' placeholder="Example : Audi R-8" />
                {props.errors.name ?<div className='Form_errorsYupContentProducts'> <p className='Form_errorsYupProducts'>{props.errors.name}</p></div> : null}
                
                <label className='Form_MainvalidateLabel' htmlFor="description">Set description of your product</label>
                <Field value={props.values.description} onChange={props.handleChange} onBlur={props.handleBlur} id="Form_description" name="description" type='description' placeholder="Example: Is a mid-engine, 2-seater sports car,etc" />
                {props.errors.description ?<div className='Form_errorsYupContentProducts'> <p className='Form_errorsYupProducts'>{props.errors.description}</p></div> : null}
              
                <label className='Form_MainvalidateLabel' htmlFor="stock">Set stock of your product</label>
                <Field value={props.values.stock} onChange={props.handleChange} onBlur={props.handleBlur} id="Form_stock" name="stock" type='stock' placeholder="Example : 50" />
                {props.errors.stock ?<div className='Form_errorsYupContentProducts'> <p className='Form_errorsYupProducts'>{props.errors.stock}</p></div> : null}
                
                <label className='Form_MainvalidateLabel' htmlFor="brand">Set brand of your product</label>
                <Field value={props.values.brand} as='select' onChange={props.handleChange} onBlur={props.handleBlur} id="Form_brand" name="brand" type='brand' placeholder="Example: Sony,Ford,Etc.">
             
            {category === 'cars' ? 

            optionsCars ? optionsCars.map(item =>(
                <option value={item.value}>{item.label}</option>
              )) : ''

             : null}

            {category === 'indumentary' ? 
            
            optionsIndumentary ? optionsIndumentary.map(item =>(
                <option value={item.value}>{item.label}</option>
              )) : ''
            
             : null}

           {category === 'supermarket' ? 
            
            optionsSupermarket ? optionsSupermarket.map(item =>(
                <option value={item.value}>{item.label}</option>
              )) : ''
            
             : null}

          {category === 'technology' ? 
            
            optionsTechnology ? optionsTechnology.map(item =>(
                <option value={item.value}>{item.label}</option>
              )) : ''
            
             : null}

                </Field>

                <label className='Form_MainvalidateLabel' htmlFor="subCategory">Set subCategory of your product</label>


                <Field  value={props.values.subCategory} as='select' onChange={props.handleChange} onBlur={props.handleBlur} id="Form_brand" name="subCategory" type='subCategory' placeholder="Example: Sony,Ford,Etc.">
                {category === 'supermarket' ? 
            
                 optionsSupermarketSubCategory ? optionsSupermarketSubCategory.map(item =>(
                    <option value={item.value}>{item.label}</option>
                  )) : ''
                
                 : null}

                {category === 'indumentary' ? 
            
                optionsIndumentarySubCategory ? optionsIndumentarySubCategory.map(item =>(
                    <option value={item.value}>{item.label}</option>
                  )) : ''
                
                 : null}

                 
                {category === 'cars' ? 
            
            optionsCarsSubCategory ? optionsCarsSubCategory.map(item =>(
                  <option value={item.value}>{item.label}</option>
                )) : ''
            
             : null}

              {category === 'technology' ? 
            
            optionsTechnologySubCategory ? optionsTechnologySubCategory.map(item =>(
                   <option value={item.value}>{item.label}</option>
                 )) : ''
            
               : null}



                </Field>
              

          
                <label className='Form_MainvalidateLabel' htmlFor="price">Insert price of your product</label>
                <Field value={props.values.price} onChange={props.handleChange} onBlur={props.handleBlur} id="Form_price" name="price" type='price' placeholder="Example : $50000" />
                {props.errors.price ?<div className='Form_errorsYupContentProducts'> <p className='Form_errorsYupProducts'>{props.errors.price}</p></div> : null}
            

          { booleanLink ? <Link id='Form_FormikSubmitButton' to='/buy-products/cars'>Go to Products</Link>  : <button id='Form_FormikSubmitButton'>Submit</button>}


              </Form>

)}}
            </Formik> 
            </div>
   </div>
    
   </>
  )
}

export default MainForm