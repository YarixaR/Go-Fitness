import { Link } from 'react-router-dom'

function Signup() {
    return(
        <div>
            <h1>REGISTER</h1>
            <div>
            <Link to={'/login'}>Sign In</Link>
            </div>
            <Link to={'/'}>Back to Main</Link>
        </div>
    )
}

export default Signup