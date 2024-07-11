import React, { useEffect } from 'react';
import './styles/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import Contact from './components/Contact';
import Spinner from './components/Spinner';
import Sidebar from './components/Sidebar';

function App() {
  useEffect(() =>{
    window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
  });

  return (
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
        <AboutUs />
        <Team />
        <Contact />
        <Footer />
        <a href="#" className="scroll-btn">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
