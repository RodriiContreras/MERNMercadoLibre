import React,{useState,useEffect} from 'react'
import CarrouselHome from '../../../components/carrouselHome/CarrouselHome'
import Navbar from '../../../components/navbar/Navbar'
import CardsIndumentary from './CardsIndumentary/CardsIndumentary'
import IndumentaryCategories from './IndumentaryCategories/IndumentaryCategories'



const IndumentarySection = () => {
    const [products, setProducts] = useState([])

     console.log(products)
    useEffect(() => {
        fetch('/product/buy-products').then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(respJson => {
           let indumentaryProducts = respJson.msg.filter(item => item.category === 'indumentary')
            let arraySlice = indumentaryProducts.slice(0,5)
          setProducts(arraySlice)
        })
    }, [])


  return (
    <>
    <Navbar/>
    <CarrouselHome/>
<IndumentaryCategories/>


    <div id='Products_CarsContainer'>
     {products.map(items => (
        <CardsIndumentary key={items.id} price={items.price} stock={items.stock} name={items.name}/>
    ))}  
   </div>
    </>

  )
}

export default IndumentarySection