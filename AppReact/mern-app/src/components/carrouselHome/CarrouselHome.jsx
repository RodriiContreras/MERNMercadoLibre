import React from 'react'
import {Carousel} from 'react-bootstrap'
import Imagen1 from '../navbar/images/razer.jpg'
import Imagen2 from '../navbar/images/Supermarket.jpg'
import Imagen3 from '../navbar/images/cars.jpg'
import './carrouselHome.css'

const CarrouselHome = () => {
  return (
   <>
   <Carousel id='Carrousel_Container'>
  <Carousel.Item style={{"height":"400px"}}>
    <img
      className="d-block w-100 h-100"
      src={Imagen1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{"height":"400px"}}>
    <img
      className="d-block w-100 h-100"
      src={Imagen2}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{"height":"400px"}}>
    <img
      className="d-block w-100 h-100"
      src={Imagen3}
      alt="Third slide"
    />

    <Carousel.Caption>
 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   </>
  )
}

export default CarrouselHome