import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Know_more from './components/Know_more';
import Other_services from './components/Other_services';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navbar/>} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/know-more/:id" element={<Know_more/>} />
        <Route path="/other-services" element={<Other_services/>} />
      </Routes>
    </Router>

  );
}

export default App;
