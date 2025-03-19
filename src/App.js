import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";
import Particles from './background/Particles.js';    


const Navbar = () => (<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
);


const Home = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-900 text-white">
      
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute w-72 h-72 bg-blue-500 opacity-30 rounded-full top-10 left-10"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute w-96 h-96 bg-purple-500 opacity-30 rounded-full bottom-20 right-20"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-300 mt-4">A passionate web developer 🚀</p>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 1 }} 
          className="mt-6"
        >
          <Link to="/projects">
            <button className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-lg">
              View My Work
            </button>
          </Link>
        </motion.div>
      </motion.div>

    </div>
  );
};

const About = () => (
  <div className="p-6 text-center">
    <h2 className="text-3xl font-bold">About Me</h2>
    <p className="text-gray-400 mt-2">I am a React developer with a passion for front-end design.</p>
  </div>
);
      



const Projects = () => (
  <div className="p-6 text-center">
    <h2 className="text-3xl font-bold">My Projects</h2>
    <ul className="mt-4">
      <li className="text-gray-400">👩‍🎓👨‍🎓Face Recognition</li>
      <li className="text-gray-400">🚀 Portfolio Website</li>
      <li className="text-gray-400">🛍️ E-commerce Website</li>
      <li className="text-gray-400">📊 Data Analytics Dashboard</li>
    </ul>
  </div>
);
const Contact = () => (
  <div className="p-6 text-center">
    <h2 className="text-3xl font-bold">Connect with Me</h2>
    <ul className="mt-4 space-y-3">
      <li className="text-gray-400">
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          🔗 LinkedIn
        </a>
      </li>
      <li className="text-gray-400">
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          🐙 GitHub
        </a>
      </li>
      <li className="text-gray-400">
        <a href="https://www.hackerrank.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
          🏆 HackerRank
        </a>
      </li>
      <li className="text-gray-400">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
          📄 Resume
        </a>
      </li>
    </ul>
  </div>
);

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
