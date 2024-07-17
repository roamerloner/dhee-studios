import React from 'react';
import {Tilt} from 'react-tilt';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function Team() {
  return (
    <div>
        {/* Team */}
                
                  <section className="team" id="team">
                    <div className="section-header">
                      <h1 className="section-heading-team">Our Team</h1>
                      <div className="underline" />
                    </div>
                    <div className="cards-wrapper">
                      <Tilt>
                        <div className="card" options={defaultOptions}>
                          <div className="card-img-wrapper">
                            <img src="images/person-1.jpg" alt="CEO" />
                          </div>
                          <div className="card-info">
                            <h2>John Smith</h2>
                            <h3>CEO</h3>
                            <p>
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Asperiores, impedit!"
                            </p>
                            <button>Read More</button>
                          </div>
                        </div>
                      </Tilt>

                      <Tilt>
                        <div className="card" options={defaultOptions}>
                          <div className="card-img-wrapper">
                            <img src="images/poco.jpg" alt="Architect" />
                          </div>
                          <div className="card-info">
                            <h2>Tasmeen Zaheen</h2>
                            <h3>Architect &amp; Designer</h3>
                            <p>
                              Makes core imagination into art.
                            </p>
                            <button>Read More</button>
                          </div>
                        </div>
                      </Tilt>
                      <Tilt>
                        <div className="card" options={defaultOptions}>
                          <div className="card-img-wrapper">
                            <img src="images/person-2.jpg" alt="Designer" />
                          </div>
                          <div className="card-info">
                            <h2>Ann Brown</h2>
                            <h3>Designer</h3>
                            <p>
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Asperiores, impedit!"
                            </p>
                            <button>Read More</button>
                          </div>
                        </div>
                      </Tilt>
                    </div>
                  </section>

                {/* Team section ends */}
    </div>
  )
}


export default Team;