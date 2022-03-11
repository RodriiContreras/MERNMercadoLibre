import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../../../components/navbar/Navbar';
import ImagenPrueba from '../images/notebook.jpg'
import Loading from '../../../../components/loading/loader.gif'


const TechnologyCategory =() => {

    const {category} = useParams()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    console.log(products)

    useEffect(() => {
        fetch(`http://localhost:8080/product/buy-productsCategory/technology`)
        .then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(respJson => {
            let ProductFilter = respJson.msg.filter( item => item.subCategory === category )    
            setProducts(ProductFilter)
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);                   
          }, 2000);
          });
    }, [])

    
    if (loading) {
      return(
        <div>
      <Navbar/>
      <div id='Loading_Content'>
      <img id='Loading_Style' src={Loading}/>
      </div>
      </div>
    )
    }
    
    
 
  return(
 <>
    <Navbar/>
    <div id='CarsBrands_Content'>

       { products ?
           products.map(items =>(
         <div id='CarsBrands_CardContainer'>
               <Link to={`/product/buy-product/${items._id}`} id='CarsBrands_LinkContainer'>
             <div id='CarsBrands_ImagesContainer'>
                   <img src={ImagenPrueba} id='CarsBrands_Images' alt='Product Image'/>
             </div>
             <p id='CarsBrands_Price'>${items.price}</p>
             <p id='CarsBrands_Name'>{items.name}</p>
             <p id='CarsBrands_Description'>{items.description}</p>
             <p id='CarsBrands_Brand'>{items.brand}</p>
             </Link>
        </div>
     )): ''}   

    </div>
    </>
  )
}

export default TechnologyCategory