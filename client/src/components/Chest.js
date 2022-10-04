
import NavBar from './NavBar';
import FitCard from './FitCard';
import { Typography } from '@mui/material';

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
            </div>
        </div>
    )
}

export default Chest