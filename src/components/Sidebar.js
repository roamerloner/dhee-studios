import React from 'react'
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div>
          <section className="sidebar">
                  <ul className="menu">
                    <li className="menu-item">
                      <Link to="#home" className="menu-link" data-content="Home">Home</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="#about-us" className="menu-link" data-content="About Us">About Us</Link>
                    </li>
                    <li className="menu-item">
                      <a href="#team" className="menu-link" data-content="Team">Team</a>
                    </li>
                    <li class="menu-item">
                  <a href="/portfolio" className="menu-link" data-content="Portfolio" target="_blank">Portfolio</a>
                     </li>
                    <li className="menu-item">
                      <Link to="#services" className="menu-link" data-content="Services">Services</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="#contact" className="menu-link" data-content="Contact">Contact</Link>
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
