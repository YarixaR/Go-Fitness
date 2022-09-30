// import { NavLink } from 'react-router-dom'
import NavBar from './NavBar';
// import Card from './Card';
import React from 'react';
import { useHistory } from 'react-router-dom'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography } from '@mui/material';





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
      

function Home({exercise, userData}) {

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
        <div>
            <div>
            <NavBar />
                <Typography variant="h5">Welcome, {userData.name}</Typography>
            </div>
            <ImageList sx={{ 
                gridAutoFlow: "column",
                gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr)) !important",
                gridAutoColumns: "minmax(230px, 1fr)"}}>
            
                <ImageListItem key={img1}>
                <img onClick = { navigateToAbs } src={img1} alt={title1}/>
                <ImageListItemBar title={title1}/>
                </ImageListItem>

                <ImageListItem key={img2}>
                <img onClick = { navigateToArms } src={img2} alt={title2}/>
                <ImageListItemBar title={title2}/>
                </ImageListItem>

                <ImageListItem key={img3}>
                <img onClick = { navigateToBack } src={img3} alt={title3}/>
                <ImageListItemBar title={title3}/>
                </ImageListItem>

                <ImageListItem key={img4}>
                <img onClick = { navigateToChest } src={img4} alt={title4}/>
                <ImageListItemBar title={title4}/>
                </ImageListItem>

                <ImageListItem key={img5}>
                <img onClick = { navigateToCardio } src={img5} alt={title5}/>
                <ImageListItemBar title={title5}/>
                </ImageListItem>

                <ImageListItem key={img6}>
                <img onClick = { navigateToQuads } src={img6} alt={title6}/>
                <ImageListItemBar title={title6}/>
                </ImageListItem>

            </ImageList>
        </div>
    );
}

export default Home;
