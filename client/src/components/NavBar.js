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
            <NavLink exact to = "/home" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
            <NavLink exact to = "/user/:id" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Log</NavLink>
            <a href="#" onClick={ handleLogOut }>Sign out</a> 
        </div>
    )
}

export default NavBar;