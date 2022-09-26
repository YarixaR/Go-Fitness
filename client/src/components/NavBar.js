import { NavLink, useHistory } from 'react-router-dom'

function NavBar() {


    const history = useHistory()

    const handleLogOut = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        history.push('/')
    }

    return(
        <div>
            <NavLink exact to = "/home">Home</NavLink>
            <NavLink exact to = "/me">My Log</NavLink>
            <a href="#" onClick={ handleLogOut }>Sign out</a> 
        </div>
    )
}

export default NavBar;