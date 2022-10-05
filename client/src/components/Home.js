// import { NavLink } from 'react-router-dom'
import NavBar from './NavBar';
// import Card from './Card';
import React from 'react';
import { useHistory } from 'react-router-dom'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
// import {iconsFitness} from '../assets/iconsFitness.png'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { pink } from '@mui/material/colors';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import stretching from '../assets/video.mp4'

      const img1 = 'https://jackcityfitness.com/wp-content/uploads/benefits-of-planking.jpg'
      const title1 = 'Abs'

      const img2 = 'https://www.gqmiddleeast.com/2021/06/Bicep-curls.jpg'
      const title2 = 'Arms'

      const img3 =  'https://barbend.com/wp-content/uploads/2021/12/shutterstock_1073025029.jpg'
      const title3 = 'Back'

      const img4 =  'https://mennohenselmans.com/wp-content/uploads/2020/09/bb-bp.jpg'
      const title4 = 'Chest'

      const img5 =  'https://hips.hearstapps.com/hmg-prod/images/treadmill-testing-0438-1585840395.jpg?crop=0.668xw:1.00xh;0.180xw,0&resize=640:*'
      const title5 = 'Cardio'

      const img6 =  'https://www.muscleandfitness.com/wp-content/uploads/2019/02/1109-Barbell-Back-Squat-GettyImages-614107160.jpg?w=1109&h=614&crop=1&quality=86&strip=all'
      const title6 = 'Quads'
      

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
                    <img key={ex.id} src={ex.gifUrl} alt={ex.name} loading='lazy' className='detail-image' /> : null
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
                <ImageList 
                    sx={{ 
                        gridAutoFlow: "column",
                        gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr)) !important",
                        gridAutoColumns: "minmax(230px, 1fr)"}}
                    >
                
                    <ImageListItem key={img1}>
                    <img onClick = { navigateToAbs } src={img1} alt={title1}/>
                    <ImageListItemBar 
                        sx={{
                            background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }} 
                        title={title1}
                        />
                    </ImageListItem>

                    <ImageListItem key={img2}>
                    <img onClick = { navigateToArms } src={img2} alt={title2}/>
                    <ImageListItemBar
                        sx={{
                            background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }} 
                        title={title2}
                        />
                    </ImageListItem>

                    <ImageListItem key={img3}>
                    <img onClick = { navigateToBack } src={img3} alt={title3}/>
                    <ImageListItemBar
                        sx={{
                            background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }} 
                        title={title3}
                        />
                    </ImageListItem>

                    <ImageListItem key={img4}>
                    <img onClick = { navigateToChest } src={img4} alt={title4}/>
                    <ImageListItemBar
                        sx={{
                            background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }} 
                        title={title4}
                        />
                    </ImageListItem>

                    <ImageListItem key={img5}>
                    <img onClick = { navigateToCardio } src={img5} alt={title5}/>
                    <ImageListItemBar 
                        sx={{
                            background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }} 
                        title={title5}
                        />
                    </ImageListItem>

                    <ImageListItem key={img6}>
                    <img onClick = { navigateToQuads } src={img6} alt={title6}/>
                    <ImageListItemBar
                        sx={{
                            background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }} 
                        title={title6}
                        />
                    </ImageListItem>

                </ImageList>
                
            </div>
            
    );
}

export default Home;
