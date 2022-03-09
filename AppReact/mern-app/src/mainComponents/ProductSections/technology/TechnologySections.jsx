import React,{useState,useEffect} from 'react'
import CarrouselHome from '../../../components/carrouselHome/CarrouselHome'
import Navbar from '../../../components/navbar/Navbar'
import CardProducts from '../../../components/productosHome/CardProducts/CardProducts'
import TechnologyProducts from './TechnologyCardProducts/TechnologyProducts'
import TechnologyCategories from './TechnologyCategories/TechnologyCategories'

const TechnologySections = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/product/buy-products').then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(respJson => {
           let technologyProducts=  respJson.msg.filter(item => item.category === 'technology')
           let technologyProductsSlice =  technologyProducts.slice(0,5)
          setProducts(technologyProductsSlice)
        })
    }, [])



  return (
   <>
   <Navbar/>
   <CarrouselHome/>

   <TechnologyCategories/>

   <div id='Products_CarsContainer'>
    {products.map(items => (
        <TechnologyProducts key={items.id} price={items.price} stock={items.stock} name={items.name}/>
    ))} 
   </div>
   </>
  )
}

export default TechnologySections