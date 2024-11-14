import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Dals from './components/Pages/Dals';
import DryFruits from './components/Pages/DryFruits';
import Flours from './components/Pages/Flours';
import Masalas from './components/Pages/Masalas';
import Oils from './components/Pages/Oils';
import Rice from './components/Pages/Rice';
import { CartProvider } from './contexts/CartContext'; // If you have a CartProvider
import { SearchProvider } from './contexts/SearchContext'; // Import SearchProvider
import Login from './Login';
import Register from './Register';
const App = () => {
  return (
    <CartProvider>
      <SearchProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dals" element={<Dals />} />
            <Route path="/dry-fruits" element={<DryFruits />} />
            <Route path="/flours" element={<Flours />} />
            <Route path="/masalas" element={<Masalas />} />
            <Route path="/oils" element={<Oils />} />
            <Route path="/rice" element={<Rice />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/contact" element={<ContactForm/>}/>
            
          </Routes>
          <div>
            <Footer/>
          </div>
        </Router>
      </SearchProvider>
    </CartProvider>
  );
};

export default App;