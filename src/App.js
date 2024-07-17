import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import Contact from './components/Contact';
import Spinner from './components/Spinner';
import Sidebar from './components/Sidebar';
import PortfolioLayout from './components/layouts/PortfolioLayout';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        document.querySelector("body").classList.add("display");
      }, 4000);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.querySelector(".container").classList.toggle("change");
  };

  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<PortfolioLayout />} />
        <Route path="/" element={
          <div className="App">
            <Spinner />
            <div className={`container ${menuOpen ? 'change' : ''}`}>
              <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <span>Close</span>
              </div>
              <Header />
              <Sidebar />
              <AboutUs />
              <Team />
              <Contact />
              <Footer />
              <Link to="/portfolio" className="scroll-btn" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-arrow-up"></i>
              </Link>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;