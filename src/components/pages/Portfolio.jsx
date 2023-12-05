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
  {
    id: 3,
    title:'Place Holder 1', 
    deployed:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    repo:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image:'src/assets/placeholder.png',
    alt: 'placeholder image',
    technologies: 'HTML ,CSS, JS'
  },
  {
    id: 4,
    title:'Place Holder 2', 
    deployed:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    repo:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image:'src/assets/placeholder.png',
    alt: 'placeholder image',
    technologies: 'HTML ,CSS, JS'
  },
  {
    id: 5,
    title:'Place Holder 3', 
    deployed:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    repo:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image:'src/assets/placeholder.png',
    alt: 'placeholder image',
    technologies: 'HTML ,CSS, JS'
  },
  {
    id: 6,
    title:'Place Holder 4', 
    deployed:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    repo:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    image:'src/assets/placeholder.png',
    alt: 'placeholder image',
    technologies: 'HTML ,CSS, JS'
  },
]


export default function Portfolio() {
  return (
    <div>
    <h2 className="offset-1 p-2">Portfolio</h2>
    <Project projects={projects} /> 
    </div>
  );
}
