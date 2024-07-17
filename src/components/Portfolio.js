import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Portfolio() {
  return (
    <div>
      <div className="project-header">
        <div className="project-header-content">
          <h1>Projects</h1>
          <p>The Interior speak for themselves</p>
        </div>
      </div>
      <section className="projects-section">
        <div className="projects-grid">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="project-item">
              <img src={`-${index + 1}.jpg`} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="pagination">
          <Link to="/portfolio?page=1">« Prev</Link>
          <Link to="/portfolio?page=1">1</Link>
          <Link to="/portfolio?page=2">2</Link>
          <Link to="/portfolio?page=3">3</Link>
          <Link to="/portfolio?page=2">Next »</Link>

          <Link to="/" className="back-to-home">Back to Home</Link>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;