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
        <div className="row">
        {props.projects.map(project => (
        <div
        key={project.title}
        className="image-container container-lg col-xl-6 col-lg-12"           
        onMouseEnter={()=>handleMouseEnter(project.title)}
        onMouseLeave={handleMouseLeave}
        style={{
          filter: hoveredProject === project.title ? 'brightness(70%)' : 'none',
          transition: 'filter 0.3s ease',
        }}
        >
          <img src={project.image} alt={project.alt}/>
          {hoveredProject === project.title && (
                    <div className="image-overlay">
                    <a href={project.deployed} target="_blank">{project.title}</a>
                    <a target="_blank" href={project.repo}><img src="src/assets/github-mark.png" alt='github logo'></img></a>
                    <p>{project.technologies}</p>
                  </div>
          )}
          {/* <a href={project.deployed} target="_blank"></a> */}
          {/* <pre><figcaption> {project.title} {project.technologies} </figcaption></pre> */}
        </div>
      ))}
      </div>
    );
  }
  
  export default Project;
