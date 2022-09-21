import { Link } from 'react-router-dom'

function Login() {
    return(
        <div>
            <h1>LOG IN</h1>
            <div>
            <Link to={'/signup'}>Register</Link>
            </div>
            <Link to={'/'}>Back to Main</Link>
        </div>
    )
}

export default Login