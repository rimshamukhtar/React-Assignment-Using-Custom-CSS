import React from 'react'
import "./Products.css"

const Products = () => {
  return (
    <div className='container3'>
        <div>
            <h1>Our Products</h1>
        </div>
        <div className='images'>
        <img src='/product pic1.jpeg' alt='products pic' height={250} width={180}/>
        <img src='/product pic2.web' alt='products pic' height={250} width={180}/>
        <img src='/product pic3.jpeg' alt='products pic' height={250} width={180}/>
        <img src='/product pic4.jpeg' alt='products pic' height={250} width={180}/>
        <img src='/product pic5.webp' alt='products pic' height={250} width={180}/>
        <img src='/product pic6.avif' alt='products pic' height={250} width={180}/>
        <img src='/product pic7.avif' alt='products pic' height={250} width={180}/>
        <img src='/product pic8.avif' alt='products pic' height={250} width={180}/> 
        <img src='/product pic9.avif' alt='products pic' height={250} width={180}/> 
        </div>
    </div>
  )
}

export default Products
