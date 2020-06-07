import React from 'react'
import productOne from '../../assets/product-one.png'
import productTwo from '../../assets/product-two.png'
import productThree from '../../assets/product-three.png'
import productFour from '../../assets/product-four.png'
import productFive from '../../assets/product-five.png'
import productSix from '../../assets/product-six.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row } from 'react-bootstrap'


import './style.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Products = () => {

  return (
    <div className="products">
      <h3 className="products__header">Our Products</h3>
      <Container>
        <Carousel responsive={responsive}>
          <div className="carousel-card text-left mt-20" >
            <img className="  card-img-top" src={productSix} alt="Alt text"></img>
          </div>
          <div className="carousel-card text-left mt-20" >
            <img className="  card-img-top" src={productFive} alt="Alt text"></img>
          </div>
          <div>
            <img className=" carousel-card card-img-top" src={productThree} alt="Alt text"></img>
          </div>
          <div className="carousel-card text-left mt-20" >
            <img className="  card-img-top" src={productOne} alt="Alt text"></img>
          </div>
          <div>
            <img className=" carousel-card card-img-top" src={productTwo} alt="Alt text"></img>
          </div>
          <div>
            <img className=" carousel-card card-img-top" src={productFour} alt="Alt text"></img>
          </div>
        </Carousel>
      </Container>
    </div>



  )

}

export default Products