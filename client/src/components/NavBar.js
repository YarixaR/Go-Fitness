import { NavLink, useHistory } from 'react-router-dom'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, Typography } from '@mui/material';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


function NavBar({setUserData, setLogs }) {


    const history = useHistory()

    const handleLogOut = () => {
        fetch('/logout', {method: 'DELETE'})
        .then( ()  => {
            history.push('/')
            setUserData( '' )
            setLogs( [] )
        })
        
    }

    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

  
    // <NavLink exact to = "/home">Home</NavLink>
    // <NavLink exact to = "/me">My Log</NavLink>
    // <a href="#" onClick={ handleLogOut }>Sign out</a>  

    return(
        <div>
            <AppBar position="static" style={{backgroundColor: 'white', color: 'black'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    noWrap
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily:'Neusanextpro,sans-serif',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    Go-Fitness
                </Typography>
                <Typography
                    textAlign="center"
                    as={NavLink}
                    to='/home'
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 600,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        textAlign:"center"
                        }}
                    >
                    Home
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Typography
                    textAlign="center"
                    as={NavLink}
                    to='/me'
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 600,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        textAlign:"center"
                        }}
                    >
                    My Logs
                </Typography>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <AccountCircle />
                    </IconButton>
                    </Tooltip>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                        <MenuItem  onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" onClick={ handleLogOut }>Log out</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
                </Toolbar>
            </Container>
            </AppBar>
        </div>
    )

}

export default NavBar;  
