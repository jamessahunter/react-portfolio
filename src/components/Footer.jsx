
function Footer(){
    return(
        <footer className="fixed-bottom footer">
        <nav>
            <ul className="row justify-content-around align-items-center text-center">
                <li className="col logo"><a target="_blank" href="https://github.com/jamessahunter"><img src="/src/assets/github-mark.png" alt='github logo'></img></a> </li>
                <li className="col logo"><a target="_blank" href="https://www.linkedin.com/in/james-hunter123/"><img src="/src/assets/LI-In-Bug.png" alt="linked in logo"></img></a></li>
                <li className="col logo"><a href="https://stackoverflow.com/users/23029801/james"><img src="/src/assets/logo-stackoverflow.png" alt="stackoverflow log"></img></a> </li> 
            </ul>            
        </nav>
        </footer>
    )
}

export default Footer