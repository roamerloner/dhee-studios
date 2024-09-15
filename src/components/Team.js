import React from 'react';
import {Tilt} from 'react-tilt';
import { useState } from 'react';
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

//  function Team() {
//    return (
//      <div>
//          {/* Team */}
                
//                    <section className="team" id="team">
//                      <div className="section-header">
//                        <h1 className="section-heading-team">Our Team</h1>
//                        <div className="underline" />
//                      </div>
//                      <div className="cards-wrapper">
//                        <Tilt>
//                          <div className="card" options={defaultOptions}>
//                            <div className="card-img-wrapper">
//                               <img src="images/uzair.jpg" alt="CEO" />
//                             </div>
                            
//                            <div className="card-info">
//                              <h2>Uzair Hasan</h2>
//                              <h3>Founder</h3>
//                              <button>Read More</button>
//                            </div>
//                          </div>
//                        </Tilt>

//                        <Tilt>
//                          <div className="card" options={defaultOptions}>
//                            <div className="card-img-wrapper">
//                              <img src="images/poco.jpg" alt="Architect" />
//                            </div>
//                            <div className="card-info">
//                              <h2>Tasmeen Zaheen</h2>
//                              <h3>Architect &amp; Designer</h3>
//                              <p>
//                                Makes core imagination into art.
//                              </p>
//                              <button>Read More</button>
//                            </div>
//                          </div>
//                        </Tilt>

//                        <Tilt>
//                          <div className="card" options={defaultOptions}>
//                            <div className="card-img-wrapper">
//                              <img src="images/patrick.jpg" alt="Designer" />
//                            </div>
//                            <div className="card-info">
//                              <h2>Dhrubo R. Chowdhury</h2>
//                              <h3>Founder</h3>
//                              <button>Read More</button>
//                            </div>
//                          </div>
//                        </Tilt>
//                      </div>

//                    </section>

//                  {/* Team section ends */}
//      </div>
//    )
//  }


//  export default Team;

const teamMembers = [
  {
    name: "Uzair Hasan",
    role: "Founder",
    image: "images/uzair.jpg",
    description: ""
  },
  {
    name: "Tasmeen Zaheen",
    role: "Architect & Designer",
    image: "images/poco.jpg",
    description: "Makes core imagination into art."
  },
  {
    name: "Dhrubo R. Chowdhury",
    role: "Founder",
    image: "images/patrick.jpg",
    description: ""
  },
  {
    name: "MD Asif Khan",
    role: "Architect & IT",
    image: "images/mac5.jpg",
    description: ""
  },
  {
    name: "Nafizul Hoque",
    role: "Founder",
    image: "images/nafizul.jpg",
    description: "Let it be",
  }
  
];

function Team() {
  const [currentPage, setCurrentPage] = useState(0);
  const membersPerPage = 3;

  const pageCount = Math.ceil(teamMembers.length / membersPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <section className="team" id="team">
        <div className="section-header">
          <h1 className="section-heading-team">Our Team</h1>
          <div className="underline" />
        </div>
        <div className="cards-wrapper">
          {teamMembers.slice(currentPage * membersPerPage, (currentPage + 1) * membersPerPage).map((member, index) => (
            <Tilt key={index} options={defaultOptions}>
              <div className="card">
                <div className="card-img-wrapper">
                  <img src={member.image} alt={member.role} />
                </div>
                <div className="card-info">
                  <h2>{member.name}</h2>
                  <h3>{member.role}</h3>
                  {member.description && <p>{member.description}</p>}
                  <button>Read More</button>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
        {pageCount > 1 && (
          <div className="pagination">
            {[...Array(pageCount)].map((_, index) => (
              <button
                key={index}
                className={currentPage === index ? 'active' : ''}
                onClick={() => handlePageChange(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Team;
