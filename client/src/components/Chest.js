
import NavBar from './NavBar';
import FitCard from './FitCard';
import { Typography, Box } from '@mui/material';

function Chest({ exercise, handleAddLogs, userId, handleUpdate, setUserData, setLogs }) {


    return(
        <div>
            <NavBar setUserData={setUserData} setLogs={setLogs} userId={userId}/>
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
                {exercise.map(chest => chest.bodyPart === "chest" ? <FitCard 
                    key = {chest.id}
                    id = {chest.id}
                    bodyPart = {chest.bodyPart}
                    equipment = {chest.equipment}
                    gifUrl = {chest.gifUrl}
                    name = {chest.name}
                    target = {chest.target}
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

export default Chest