import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"; 
import bg from './assets/bgp.avif'; 
import "./style/App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Background Animation */}
        <div className="background-overlay" style={{ backgroundImage: `url(${bg})` }}></div>

        {/* Use Navbar Component Here */}
        <Navbar />  

        {/* Page Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


