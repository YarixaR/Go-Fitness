
import NavBar from './NavBar';
import FitCard from './FitCard';
import { Typography, Box } from '@mui/material';

function Quads({ exercise, handleAddLogs, userId, handleUpdate, setUserData, setLogs }) {


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
                {exercise.map(quads => quads.bodyPart === "upper legs" ? <FitCard 
                    key = {quads.id}
                    id = {quads.id}
                    bodyPart = {quads.bodyPart}
                    equipment = {quads.equipment}
                    gifUrl = {quads.gifUrl}
                    name = {quads.name}
                    target = {quads.target}
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

export default Quads