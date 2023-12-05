export default function About() {
  return (
    <div className="about">
      <h1 className="offset-1">About Me</h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-3 col-lg-12 align-self-center">
      <img src="src/assets/portrait.jpg" alt="photo of myself (James Hunter)" className="mx-auto d-block"/>
      </div>
      <div className="col-xl-9 col-lg-12">
      <p>
      My name is James Hunter. I am 26 and living in San Diego California. I have a background in Mechanical Engineering. 
                I am looking to expand my skills into full stack developement. My hobbies include climbing, pickleball and going to the movies.
      </p>
      </div>
      </div>
    </div>
  );
}
