
import NavBar from './NavBar';
import FitCard from './FitCard';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';

function Abs({ exercise, handleAddLogs, userId, handleUpdate, setUserData, setLogs }) {



    return(
        <div>
            <NavBar setUserData={setUserData} setLogs={setLogs} userId={userId}  />
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
                {exercise.map(abs => abs.bodyPart === "waist" ? <FitCard 
                    key = {abs.id}
                    id = {abs.id}
                    bodyPart = {abs.bodyPart}
                    equipment = {abs.equipment}
                    gifUrl = {abs.gifUrl}
                    name = {abs.name}
                    target = {abs.target}
                    handleAddLogs={handleAddLogs}
                    exercise={exercise}
                    handleUpdate={handleUpdate}
                    
                
                /> : null
                )
                }
                </Box>
            </div>
        </div>
    )
}

export default Abs