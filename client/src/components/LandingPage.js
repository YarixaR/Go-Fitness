// import { NavButton } from "../tools/hooks"
import { Link } from 'react-router-dom'
import battlerope2 from '../assets/battlerope2.mp4'
function LandingPage() {


    
    // fetch('/all_exercises')
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    return(
        <div className='landing-page'>
            <div className='overlay'></div>
            <video src={battlerope2} autoPlay loop muted/>
            <div className='content'>
                <h1>Go-Fitness</h1>
                <h1>BETTER MOVEMENT FOR ALL.</h1>
                <Link to={'/signup'}>Register</Link>
                <Link to={'/login'}>Sign in</Link>
            </div>
        </div>
    )
}

export default LandingPage