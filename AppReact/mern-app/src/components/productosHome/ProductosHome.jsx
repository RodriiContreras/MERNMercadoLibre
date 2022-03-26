import React from 'react'
import './productosHome.css'
import { useEffect, useState} from 'react'
import CardProducts from './CardProducts/CardProducts'
import {Link} from 'react-router-dom'
import Playstation5 from './imagenesprueba/console-playstation5.png'
import Audi from './imagenesprueba/audi.png'
import Indumentary from './imagenesprueba/indumentary.png'
import Shopping from './imagenesprueba/shopping.png'
import Footer from './Footer/Footer'

const ProductosHome = () => {
    const [productos, setproductos] = useState([])
    useEffect(() => {
        fetch('/product/buy-products').then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(respJson =>{
            const almacenador = respJson.msg.slice(0,5)
             setproductos(almacenador)
        })
    }, [])
    

    console.log(productos)
  return (
   <>
   <h2 id='h2_productosHome'>Some of our Products</h2>
   <div id='CardProducts_ContainerFlex'>
    {productos.map(items => (
        <CardProducts id={items._id} key={items._id} price={items.price} stock={items.stock} name={items.name}/>
    ))}
   </div>

    
   <div id='Div_ProductosHome'>
   <Link to='/'>
   </Link>
   </div>

   <div id='Categories_ProductosHome'>
    <Link className='Categories_Link' to='/buy-products/technology'>
    <div className='Categories_SubProductosHome'>
        <div id='Categories_SubProductImg'>
         <img id='Categories_Img'  src={Playstation5}/>
        </div>


       <div id='Categories_SubProductTitle'>
       <p id='Categories_SubProductTitlee'>Technology</p>
       <p id='Categories_SubProductOffer'>68% OFF</p>
       <p style={{'color':'blue'}}>See products</p> 
       </div>
    </div>
    </Link>

  <Link className='Categories_Link' to='/buy-products/cars'>
    <div className='Categories_SubProductosHome2'>

     <div id='Categories_StrechSubProductImg'>
     <img id='Categories_Img2'  src={Audi}/>
     </div>

     <div id='Categories_SubProductTitle2'>
       <p id='Categories_SubProductTitlee2'>Cars</p>
       <p id='Categories_SubProductOffer2'>68% OFF</p>
       <p style={{'color':'blue'}}>See products</p> 
       </div>

    </div>
 </Link>


 <Link className='Categories_Link' to='/buy-products/indumentary'>
    <div className='Categories_SubProductosHome'>
    <div id='Categories_SubProductImg3'>
         <img id='Categories_Img3' src={Indumentary}/>
        </div>


       <div id='Categories_SubProductTitle'>
       <p id='Categories_SubProductTitlee'>Indumentary</p>
       <p id='Categories_SubProductOffer'>68% OFF</p>
       <p style={{'color':'blue'}}>See products</p> 
       </div>
    </div>
    </Link>




<Link className='Categories_Link' to='/buy-products/supermarket'>
<div className='Categories_SubProductosHome'>
<div className='Categories_SubProductosHome2'>
<div id='Categories_StrechSubProductImg'>
<img id='Categories_Img4'  src={Shopping}/>
</div>

<div id='Categories_SubProductTitle2'>
  <p id='Categories_SubProductTitlee2'>Supermarket</p>
  <p id='Categories_SubProductOffer2'>68% OFF</p>
  <p style={{'color':'blue'}}>See products</p> 
  </div>

</div>
</div>
</Link>
   </div>
 
<Footer/>

   </>
  )
}

export default ProductosHome