function Project(props) {
    console.log(props);
    return (
        <div>
      {props.projects.map(project => (
        <figure>
          <a href={project.deployed} target="_blank"><img src={project.image} alt={project.alt}/></a>
          <pre><figcaption> {project.title} {project.technologies} </figcaption></pre>
        </figure>
      ))}
      </div>
    );
  }
  
  export default Project;
