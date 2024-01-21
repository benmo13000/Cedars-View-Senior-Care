// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Photos from './pages/Photos';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav class="navBar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Photos">Photos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/Testimonials">Testimonials</Link></li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
