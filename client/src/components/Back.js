
import NavBar from './NavBar';
import FitCard from './FitCard';
import { Typography } from '@mui/material';

function Back({ exercise, handleAddLogs, userId, handleUpdate, setUserData,setLogs }) {


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
                {exercise.map(back => back.bodyPart === "back" ? <FitCard 
                    key = {back.id}
                    id = {back.id}
                    bodyPart = {back.bodyPart}
                    equipment = {back.equipment}
                    gifUrl = {back.gifUrl}
                    name = {back.name}
                    target = {back.target}
                    handleAddLogs={handleAddLogs}
                    handleUpdate={handleUpdate}
                    
                /> : null
                )
                }
            </div>
        </div>
    )
}

export default Back