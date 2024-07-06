// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './Not found';
import Navbar from './Navbar';
ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path = "*" element={<NotFound />} />
      <Route exact path = "/navbar" element={<Navbar/>} />
      </Routes>
  </Router>,
  document.getElementById('root')
);
