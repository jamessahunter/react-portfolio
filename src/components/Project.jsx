import React, { useState } from 'react';

function Project(props) {
    console.log(props);

    const [hoveredProject, setHoveredProject] = useState(null);

    const handleMouseEnter = (title) => {
      console.log('hover')
      console.log(title)
      setHoveredProject(title);
    };
  
    const handleMouseLeave = () => {
      setHoveredProject(null);
    };
  
    return (
        <div className="row justify-content-center">
        {props.projects.map(project => (
        <div
        key={project.title}
        className="image-container container-lg col-xl-6 my-2 mx-auto p-2 col-lg-12 d-flex flex-column justify-content-center align-items-center"           
        onMouseEnter={()=>handleMouseEnter(project.title)}
        onMouseLeave={handleMouseLeave}
        style={{
          // filter: hoveredProject === project.title ? 'brightness(30%)' : 'none',
          transition: 'filter 0.3s ease',
          position: 'relative'
        }}
        >
          <img src={project.image} alt={project.alt}/>
          {hoveredProject === project.title && (
                    <div className="image-overlay position-absolute d-flex justify-content-around align-self-center"
                    style={{
                      top: '50%', // Adjust the top position to center the overlay vertically
                      left: '50%', // Adjust the left position to center the overlay horizontally
                      transform: 'translate(-50%, -50%)', // Use translate to center the overlay precisely
                    }}>
                    <div className='row align-self-center'>
                    <a className='col-4 title' href={project.deployed} target="_blank">{project.title}</a>
                    <a className="col-4" target="_blank" href={project.repo}><img src="/src/assets/github-mark.png" alt='github logo' ></img></a>
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
