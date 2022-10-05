// import { NavLink } from 'react-router-dom'
import NavBar from './NavBar';
// import Card from './Card';
import React from 'react';
import { useHistory } from 'react-router-dom'

import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
// import {iconsFitness} from '../assets/iconsFitness.png'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { pink } from '@mui/material/colors';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import stretching from '../assets/video.mp4'
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';


const images = [
    {
        url: 'https://jackcityfitness.com/wp-content/uploads/benefits-of-planking.jpg',
        title: 'Abs',
        width: '30%'
    },
    {
        url: 'https://www.gqmiddleeast.com/2021/06/Bicep-curls.jpg',
        title: 'Arms',
        width: '30%'
    },
    {
        url: 'https://barbend.com/wp-content/uploads/2021/12/shutterstock_1073025029.jpg',
        title: 'Back',
        width: '30%'
    },
    {
        url: 'https://mennohenselmans.com/wp-content/uploads/2020/09/bb-bp.jpg',
        title: 'Chest',
        width: '30%'
    },
    {
        url: 'https://hips.hearstapps.com/hmg-prod/images/treadmill-testing-0438-1585840395.jpg?crop=0.668xw:1.00xh;0.180xw,0&resize=640:*',
        title: 'Cardio',
        width: '30%'
    },    {
        url: 'https://www.muscleandfitness.com/wp-content/uploads/2019/02/1109-Barbell-Back-Squat-GettyImages-614107160.jpg?w=1109&h=614&crop=1&quality=86&strip=all',
        title: 'Quads',
        width: '30%',
    }

]

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

      
      

function Home({exercise, userData, setUserData, setLogs}) {

    const history = useHistory()

    const navigateToAbs = () => {
        if(userData) {
            history.push('/abs')
        } else {history.push('/login')}
       
    }

    const navigateToQuads = () => {
        if(userData) {
            history.push('/quads')
        } else {history.push('/login')}
       
    }

    const navigateToBack = () => {
        if(userData) {
            history.push('/back')
        } else {history.push('/login')}
       
    }

    const navigateToArms = () => {
        if(userData) {
            history.push('/arms')
        } else {history.push('/login')}
       
    }

    const navigateToChest = () => {
        if(userData) {
            history.push('/chest')
        } else {history.push('/login')}
       
    }

    const navigateToCardio = () => {
        if(userData) {
            history.push('/cardio')
        } else {history.push('/login')}
       
    }

    

    return(
        
            <div className='home'>
                <div>
                <NavBar  setUserData={setUserData} setLogs={setLogs} userData={userData} />
                </div>
                <div>
                    <video src={stretching} autoPlay loop muted/>
                </div>
                <div className='video'>
                    <Typography fontFamily='Sarabun' variant="h5">Welcome, {userData.name}</Typography>
                    <Typography fontFamily='Neusanextpro,sans-serif' fontWeight='700' variant='h2' sx={{ letterSpacing: '-.1em', lineHeight: '100%' }}>UNLOCK YOUR POTENTIAL</Typography>
                </div>
                <div>
                <Stack gap='60px' sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
                {exercise.map(ex => ex.name === 'back and forth step' ? 
                    <CardMedia
                        key={ex.id}
                        component='img'
                        image={ex.gifUrl}
                        alt={ex.name} 
                        loading='lazy' 
                        className='detail-image'
                        sx={{width: 700,
                        borderRadius: 2
                        }}
                    /> : null
                )}
                <Stack sx={{ gap: {lg: '35px', xs: '20px' }}} >
                    <Typography fontFamily='Neusanextpro,sans-serif' fontWeight='700' variant='h4' sx={{ letterSpacing: '-.02em', lineHeight: '100%' }}>BACK AND FORTH STEP</Typography>
                    <Typography fontFamily='Sarabun' variant='h6'>The back and forth step improves overall fitness by building strength, reducing fat, and boosting your cardiovascular health. Targeting your glutes, quadriceps, and hamstrings. 
                    </Typography>
                        <Stack direction='row' gap='24px' alignItems='center'>
                            <MonitorHeartIcon fontSize='large' sx={{ color: pink[500] }} />
                            <Typography fontFamily='Sarabun'>Cardio</Typography>
                        </Stack>
                        <Stack direction='row' gap='24px' alignItems='center'>
                            <FitnessCenterIcon fontSize='large' sx={{ color: pink[500] }} />
                            <Typography fontFamily='Sarabun'>Body Weight</Typography>
                        </Stack>
                </Stack>
                </Stack>
                </div> 
                <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', ml: '70px' }}>
          
                    <ImageButton
                    onClick = { navigateToAbs }
                    focusRipple
                    key={images[0].title}
                    style={{
                        width: images[0].width,
                    }}
                    >
                    <ImageSrc style={{ backgroundImage: `url(${images[0].url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                            position: 'relative',
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                        >
                        {images[0].title}
                        <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                    </ImageButton>
                    <ImageButton
                    onClick = { navigateToArms }
                    focusRipple
                    key={images[1].title}
                    style={{
                        width: images[1].width,
                    }}
                    >
                    <ImageSrc style={{ backgroundImage: `url(${images[1].url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                            position: 'relative',
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                        >
                        {images[1].title}
                        <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                    </ImageButton>
                    <ImageButton
                    onClick = { navigateToBack }
                    focusRipple
                    key={images[2].title}
                    style={{
                        width: images[2].width,
                    }}
                    >
                    <ImageSrc style={{ backgroundImage: `url(${images[2].url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                            position: 'relative',
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                        >
                        {images[2].title}
                        <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                    </ImageButton>
                    <ImageButton
                    onClick = { navigateToChest }
                    focusRipple
                    key={images[3].title}
                    style={{
                        width: images[3].width,
                    }}
                    >
                    <ImageSrc  style={{ backgroundImage: `url(${images[3].url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                            position: 'relative',
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                        >
                        {images[3].title}
                        <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                    </ImageButton>
                    <ImageButton
                    onClick = { navigateToCardio }
                    focusRipple
                    key={images[4].title}
                    style={{
                        width: images[4].width,
                    }}
                    >
                    <ImageSrc style={{ backgroundImage: `url(${images[4].url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                            position: 'relative',
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                        >
                        {images[4].title}
                        <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                    </ImageButton>
                    <ImageButton
                    onClick = { navigateToQuads }
                    focusRipple
                    key={images[5].title}
                    style={{
                        width: images[5].width,
                    }}
                    >
                    <ImageSrc style={{ backgroundImage: `url(${images[5].url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                            position: 'relative',
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                        >
                        {images[5].title}
                        <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                    </ImageButton>

                </Box>      
                
            </div>
            
    );
}

export default Home;
