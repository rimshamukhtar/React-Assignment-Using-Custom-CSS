import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='container'>
    <div className='content'>
      <h1>Discover Our New Collection</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nemo quaerat iste laudantium rerum ullam, reprehenderit cupiditate 
      voluptatem pariatur eos nostrum placeat, corporis temporibus ex ratione sed expedita, nihil dolorem.</p>
      <button>Order Now</button>
    </div>
    <div className='image1'>
      <img src='/bg pic.jpeg' alt='herosection pic' height={300} width={300}/>
    </div>
     
    </div>
  )
}

export default Home