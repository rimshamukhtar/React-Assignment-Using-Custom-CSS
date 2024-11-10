// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';



function App() {
  return (
 
    <Router>
        <Navbar />
         <Routes>
         <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/contactus' element={<ContactUs/>} />
         </Routes>
         </Router>
  );
}

export default App;
