import gitHubLogo from '../assets/github-mark.png'
import stackoverflowLogo from '../assets/logo-stackoverflow.png'
import linkedInLogo from '../assets/LI-In-bug.png'

function Footer(){
    return(
        <footer className="fixed-bottom footer">
        <nav>
            <ul className="row justify-content-around align-items-center text-center">
                <li className="col logo"><a target="_blank" href="https://github.com/jamessahunter"><img src={gitHubLogo} alt='github logo'></img></a> </li>
                <li className="col logo"><a target="_blank" href="https://www.linkedin.com/in/james-hunter123/"><img src={linkedInLogo} alt="linked in logo"></img></a></li>
                <li className="col logo"><a href="https://stackoverflow.com/users/23029801/james"><img src={stackoverflowLogo} alt="stackoverflow log"></img></a> </li> 
            </ul>            
        </nav>
        </footer>
    )
}

export default Footer