import React, { useState } from 'react';
import gitHubLogo from '../assets/github-mark.png'

function Project(props) {
  //uses props to import project data from portfolio
    const [hoveredProject, setHoveredProject] = useState(null);

    const handleMouseEnter = (title) => {

      setHoveredProject(title);
    };
  
    const handleMouseLeave = () => {
      setHoveredProject(null);
    };
  
    return (
        <div className="row justify-content-center">
          {/* goes through the array of projects */}
        {props.projects.map(project => (
        <div
        key={project.title}
        className="image-container container-lg col-xl-6 my-2 mx-auto p-2 col-lg-12 d-flex flex-column justify-content-center align-items-center"           
        //listens for mouse hover over project
        onMouseEnter={()=>handleMouseEnter(project.title)}
        onMouseLeave={handleMouseLeave}
        style={{
          transition: 'filter 0.3s ease',
          position: 'relative'
        }}
        >
          <img src={project.image} alt={project.alt}/>
          {/* adds effect when hover over */}
          {hoveredProject === project.title && (
                    <div className="image-overlay position-absolute d-flex justify-content-around align-self-center"
                    style={{
                      top: '50%', 
                      left: '50%', 
                      transform: 'translate(-50%, -50%)',
                    }}>
                    <div className='row align-self-center'>
                    <a className='col-4 title' href={project.deployed} target="_blank">{project.title}</a>
                    <a className="col-4" target="_blank" href={project.repo}><img src={gitHubLogo} alt='github logo' ></img></a>
                    <p className="col-4"> {project.technologies}</p>
                    </div>
                  </div>
          )}
        </div>
      ))}
      </div>
    );
  }
  
  export default Project;
