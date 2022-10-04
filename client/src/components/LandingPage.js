// import { NavButton } from "../tools/hooks"
import { Link } from 'react-router-dom'
import battlerope2 from '../assets/battlerope2.mp4'
import { Typography } from '@mui/material';

function LandingPage() {


    return(
        <div className='landing-page'>
            <div className='overlay'></div>
            <video src={battlerope2} autoPlay loop muted/>
            <div className='content'>
            <Typography fontFamily='Neusanextpro,sans-serif' fontWeight='700' variant='h2' sx={{ letterSpacing: '-.06em', lineHeight: '100%' }}>GO-FITNESS</Typography>
            <Typography fontFamily='Neusanextpro,sans-serif' fontWeight='500' variant='h4' sx={{ letterSpacing: '-.06em', lineHeight: '100%' }}>BETTER MOVEMENT FOR ALL</Typography>
                <Link to={'/signup'}>Register</Link>
                <Link to={'/login'}>Sign in</Link>
            </div>
        </div>
    )
}

export default LandingPage