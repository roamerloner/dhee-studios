// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/styles.css';

// function Portfolio() {
//   return (
//     <div>
//       <div className="project-header">
//         <div className="project-header-content">
//           <h1>Projects</h1>
//           <p>The Interior speak for themselves</p>
//         </div>
//       </div>
//       <section className="projects-section">
//         <div className="projects-grid">
//              {[...Array(projectCount)].map((_, index) => (
//             <div key={index} className="project-item">
//               <img 
//                 src={`${process.env.PUBLIC_URL}/images/projects/project-${index + 1}.jpg`} 
//                 alt={`Project ${index + 1}`} 
//               />
//             </div>
//           ))}
//         </div>
//         <div className="pagination">
//           <Link to="../public/images/projects/project1.jpg?page=1">« Prev</Link>
//           <Link to="/portfolio?page=1">1</Link>
//           <Link to="/portfolio?page=2">2</Link>
//           <Link to="/portfolio?page=3">3</Link>
//           <Link to="/portfolio?page=2">Next »</Link>

//           <Link to="/" className="back-to-home">Back to Home</Link>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Portfolio;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const imageContext = require.context('../../public/images/projects', false, /\.(png|jpe?g|svg)$/);
    
    const loadImages = async () => {
      const images = importAll(imageContext);
      setProjects(images.map((image, index) => ({
        id: index + 1,
        src: image,
        alt: `Project ${index + 1}`
      })));
    };

    loadImages();
  }, []);

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
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <img 
                src={project.src} 
                alt={project.alt} 
              />
            </div>
          ))}
        </div>
        <div className="pagination">
          <Link to="/portfolio?page=1">« Prev</Link>
          <Link to="/portfolio?page=1">1</Link>
          <Link to="/portfolio?page=2">2</Link>
          <Link to="/portfolio?page=3">3</Link>
          <Link to="/portfolio?page=2">Next »</Link>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;