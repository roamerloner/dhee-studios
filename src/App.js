import React, { useEffect } from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import Contact from './components/Contact';
import Spinner from './components/Spinner';
import Sidebar from './components/Sidebar';
import Portfolio from './components/Portfolio';

function App() {
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        document.querySelector("body").classList.add("display");
      }, 4000);
    };

    const handleHamburgerClick = () => {
      document.querySelector(".container").classList.toggle("change");
    };

    const handleScrollBtnClick = () => {
      document.querySelector("html").style.scrollBehavior = "smooth";
      setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
      }, 1000);
    };

    window.addEventListener('load', handleLoad);
    document.querySelector(".hamburger-menu")?.addEventListener("click", handleHamburgerClick);
    document.querySelector(".scroll-btn")?.addEventListener("click", handleScrollBtnClick);

    return () => {
      window.removeEventListener('load', handleLoad);
      document.querySelector(".hamburger-menu")?.removeEventListener("click", handleHamburgerClick);
      document.querySelector(".scroll-btn")?.removeEventListener("click", handleScrollBtnClick);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Spinner />
        <div className="container">
          <div className="hamburger-menu">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
            <span>Close</span>
          </div>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={
              <>
                <AboutUs />
                <Team />
                <Contact />
              </>
            } />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Footer />
          <Link to="/portfolio" className="scroll-btn">
            <i className="fas fa-arrow-up"></i>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;