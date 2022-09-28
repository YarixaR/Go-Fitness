import { NavLink, useHistory } from 'react-router-dom'
import React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';



function NavBar() {


    const history = useHistory()

    const handleLogOut = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        history.push('/')
    }

    

  
    // <NavLink exact to = "/home">Home</NavLink>
    // <NavLink exact to = "/me">My Log</NavLink>
    // <a href="#" onClick={ handleLogOut }>Sign out</a>  

    return(
        <div>
            <AppBar position='static' >
                <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography 
                    variant='h5' 
                    component='div'
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        letterSpacing: '.2rem',
                        color: 'inherit'
                      }}
                    >
                        Go-Fitness 
                    </Typography>
                    {/* <NavLink exact to = "/home" style={{textDecoration: 'none'}}> */}
                        <Typography 
                        variant='h6'
                        textAlign="center"
                        noWrap
                        as={NavLink}
                        to='/home'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 600,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none'
                          }}
                        >
                            Home
                        </Typography>
                  
                    {/* <NavLink exact to = "/me" style={{textDecoration: 'none'}}> */}
                        <Typography
                        variant='h6'
                        textAlign="center"
                        noWrap
                        as={NavLink}
                        to='/me'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 600,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none'
                          }}
                        >
                            My Logs
                        </Typography>
                
                        <Typography 
                        component="a"
                        href="#"
                        variant="h6"
                        noWrap
                        onClick={ handleLogOut }
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 600,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                          }}
                        >
                            Log out
                        </Typography>
                </Toolbar>
             </Container>
            </AppBar>
        </div>
    )

}

export default NavBar;  
    