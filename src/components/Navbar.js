import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className='header'>
    <a id='logo'>Furnix</a>
    <div className='nav'>
     <Link to="/"><a href='#'>Home</a></Link>
     <Link to="/about"><a href='#'>About US</a></Link>
     <Link to="/products"><a href='#'>Products</a></Link>
     <Link to="/contactus"><a href='#'>Contact Us</a> </Link>  
    </div>
      
    </div>
  )
}

export default Navbar
