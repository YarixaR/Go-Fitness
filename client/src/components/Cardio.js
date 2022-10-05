
import NavBar from './NavBar';
import FitCard from './FitCard';
import { Typography, Box } from '@mui/material';

function Cardio({ exercise, handleAddLogs, userId, handleUpdate, setUserData, setLogs }) {


    return(
        <div>
            <NavBar setUserData={setUserData} setLogs={setLogs} userId={userId} />
            <div>
                <Typography
                    fontWeight={600}
                    color='#ff2625'
                    sx={{
                        opacity: 0.1,
                        display: { lg: 'block', xs: 'non' },
                        
                    }}
                    fontSize='100px'
                >
                Exercise
                </Typography>
                <Box 
                    sx={{ 
                        display: 'grid',
                        columnGap: 3,
                        rowGap: 3,
                        gridTemplateColumns: {
                            sm: ".5fr",
                            md: ".5fr .5fr",
                            lg: ".5fr .5fr .5fr",
                            xl: ".5fr .5fr .5fr .5fr"
                        },
                        "& > :not(style)": {
                            m: 2,
                        },
                    }}
                >
                {exercise.map(cardio => cardio.bodyPart === "cardio" ? <FitCard 
                    key = {cardio.id}
                    id = {cardio.id}
                    bodyPart = {cardio.bodyPart}
                    equipment = {cardio.equipment}
                    gifUrl = {cardio.gifUrl}
                    name = {cardio.name}
                    target = {cardio.target}
                    handleAddLogs={handleAddLogs}
                    handleUpdate={handleUpdate}
                    
                /> : null
                )
                }
                </Box>
            </div>
        </div>
    )
}

export default Cardio