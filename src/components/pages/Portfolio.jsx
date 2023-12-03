import Project from "../Project";

const projects = [
  {
    id: 1,
    title:'Majority Matters', 
    deployed:'https://majority-matters-080972dae02f.herokuapp.com/',
    repo:'https://github.com/jamessahunter/majority-matters',
    image:'src/assets/majority matters.png',
    alt: 'screenshot of majority matters website',
    technologies: 'JS, Node, NPM'
  },
  {
    id: 2,
    title:'What to Watch', 
    deployed:'https://jamessahunter.github.io/What-to-watch',
    repo:'https://github.com/jamessahunter/What-to-watch',
    image:'src/assets/what-to-watch.png',
    alt: 'screenshot of what to watch website',
    technologies: 'HTML ,CSS, JS'
  },
]


export default function Portfolio() {
  return (
    <Project projects={projects} /> 

  );
}
