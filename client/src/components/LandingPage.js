// import { NavButton } from "../tools/hooks"
import { Link as RouterLink } from 'react-router-dom'
import battlerope2 from '../assets/battlerope2.mp4'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';


function LandingPage() {


    return(
        <div className='landing-page'>
            <div className='overlay'></div>
            <video src={battlerope2} autoPlay loop muted/>
            <div className='content'>
            <Typography fontFamily='Neusanextpro,sans-serif' fontWeight='700' variant='h2' sx={{ letterSpacing: '-.06em', lineHeight: '100%' }}>GO-FITNESS</Typography>
            <Typography fontFamily='Neusanextpro,sans-serif' fontWeight='500' variant='h4' sx={{ letterSpacing: '-.06em', lineHeight: '100%' }}>BETTER MOVEMENT FOR ALL</Typography>
                  <Button 
                  variant="outlined"
                  to='/login'
                  sx={{ 
                    mt: 3, 
                    mb: 2,
                    color: 'white',
                    border: '2px white solid'
                }}
                  component={RouterLink}
                  >
                    Sign In
                  </Button>
                  <Button 
                  variant="outlined"
                  to='/signup'
                  sx={{ 
                    color: 'white',
                    border: '2px white solid'
                }}
                  component={RouterLink}
                  >
                    Register
                  </Button>
            </div>
        </div>
    )
}

export default LandingPage