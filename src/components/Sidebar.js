import React from 'react'
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div>
          <section className="sidebar">
                  <ul className="menu">
                    <li className="menu-item">
                      <a href="#home" className="menu-link" data-content="Home">Home</a>
                    </li>
                    <li className="menu-item">
                      <a href="#about-us" className="menu-link" data-content="About Us">About Us</a>
                    </li>
                    <li className="menu-item">
                      <a href="#team" className="menu-link" data-content="Team">Team</a>
                    </li>
                    <li class="menu-item">
                  <Link href="/portfolio" className="menu-link" data-content="Portfolio">Portfolio</Link>
                     </li>
                    <li className="menu-item">
                      <a href="#services" className="menu-link" data-content="Services">Services</a>
                    </li>
                    <li className="menu-item">
                      <a href="#contact" className="menu-link" data-content="Contact">Contact</a>
                    </li>
                  </ul>
                  <div className="social-media">
                    <a href="https://www.facebook.com/profile.php?id=61562051698467" target="_blank"  rel="noreferrer"><i className="fab fa-facebook" /></a>
                    {/* <a
                  href="https://www.linkedin.com/in/karan-chandekar-a87263219/"
                  target="_blank"
                  ><i class="fab fa-linkedin"></i
                ></a> */}
                    {/* <a href="https://twitter.com/karanchandekar1" target="_blank"
                  ><i class="fab fa-twitter"></i
                ></a> */}
                  </div>
                </section>
    </div>
  )
}

export default Sidebar;
