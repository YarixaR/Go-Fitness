import NavBar from './NavBar';
import FitCard from './FitCard';
import { Typography } from '@mui/material';

function UpperArms({ exercise, handleAddLogs, userId, handleUpdate, setUserData, setLogs }) {


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
                {exercise.map(arm => arm.bodyPart === "upper arms" ? <FitCard 
                    key = {arm.id}
                    id = {arm.id}
                    bodyPart = {arm.bodyPart}
                    equipment = {arm.equipment}
                    gifUrl = {arm.gifUrl}
                    name = {arm.name}
                    target = {arm.target}
                    handleAddLogs={handleAddLogs}
                    handleUpdate={handleUpdate}
            
                /> : null
                )
                }
            </div>
        </div>
    )
}

export default UpperArms