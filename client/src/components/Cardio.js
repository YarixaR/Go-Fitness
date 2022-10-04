
import NavBar from './NavBar';
import FitCard from './FitCard';
import { Typography } from '@mui/material';

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
            </div>
        </div>
    )
}

export default Cardio