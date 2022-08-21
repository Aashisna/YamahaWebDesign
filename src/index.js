import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import './Style.css';
import Footer from './Footer';
import Header from './Header';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Bike from './Bike';
import Scooter from './Scooter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/scooter" element={<Scooter />} />
      </Routes>
      <Footer/>
    </BrowserRouter>   
  </React.StrictMode>
);
reportWebVitals();
