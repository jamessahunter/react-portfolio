import resume from '../../assets/James-Hunter-Resume.png'

export default function Resume() {
  return (
    <div className="offset-1 resume">
      <h1 className='p-2'>Resume</h1>
      <div className="row">
        <div className="col-lg-3 col-md-12">
          <a href={resume} className="resume-dl"download>Click to download Resume</a>
          <h2>Front End</h2>
          <ul className="frontend">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Jquery</li>
            <li>Bootstrap</li>
            <li>JSON</li>
          </ul>
          <h2>Back End</h2>
          <ul className="backend">
            <li>Node</li>
            <li>Express</li>
            <li>MYSQL/Sequelize</li>
            <li>MongoDb/Mongoose</li>
            <li>Restful APIs</li>
            <li>React</li>
          </ul>
        </div>
        <div className="col-lg-6 d-none d-md-block resumePng">
          <img src={resume}></img>
        </div>
      </div>
    </div>
  );
}
