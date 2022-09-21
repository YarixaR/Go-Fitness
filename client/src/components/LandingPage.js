// import { NavButton } from "../tools/hooks"
import { Link } from 'react-router-dom'

function LandingPage() {
    return(
        <div>
            <h1>LANDING PAGE</h1>
            <div>
            <Link to={'/signup'}>Register</Link>
            </div>
            <Link to={'/login'}>Sign in</Link>
            
        </div>
    )
}

export default LandingPage