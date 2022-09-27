// import { NavLink } from 'react-router-dom'
import NavBar from './NavBar';
// import Card from './Card';
import React from 'react';
import { useHistory } from 'react-router-dom'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';




      const img1 = 'https://jackcityfitness.com/wp-content/uploads/benefits-of-planking.jpg'
      const title1 = 'Abs'

      const img2 = 'https://www.gqmiddleeast.com/2021/06/Bicep-curls.jpg'
      const title2 = 'Arms'

      const img3 =  'https://barbend.com/wp-content/uploads/2021/12/shutterstock_1073025029.jpg'
      const title3 = 'Back'

      const img4 =  'https://mennohenselmans.com/wp-content/uploads/2020/09/bb-bp.jpg'
      const title4 = 'Chest'

      const img5 =  'https://manofmany.com/wp-content/uploads/2020/02/Best-Calf-Exercises.jpg'
      const title5 = 'Calves'

      const img6 =  'https://www.muscleandfitness.com/wp-content/uploads/2019/02/1109-Barbell-Back-Squat-GettyImages-614107160.jpg?w=1109&h=614&crop=1&quality=86&strip=all'
      const title6 = 'Upper Legs'

      

function Home({exercise}) {

    const history = useHistory()

    const navigateToAbs = () => {
        history.push('/abs')
      }

    const navigateToQuads = () => {
    history.push('/quads')
    }


    return(
        <div>
            <div>
            <NavBar />
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
                <img src={img2} alt={title2}/>
                <ImageListItemBar title={title2}/>
                </ImageListItem>

                <ImageListItem key={img3}>
                <img src={img3} alt={title3}/>
                <ImageListItemBar title={title3}/>
                </ImageListItem>

                <ImageListItem key={img4}>
                <img src={img4} alt={title4}/>
                <ImageListItemBar title={title4}/>
                </ImageListItem>

                <ImageListItem key={img5}>
                <img src={img5} alt={title5}/>
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
