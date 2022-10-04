
import NavBar from './NavBar';
import FitCard from './FitCard';
import { Typography } from '@mui/material';

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
            </div>
        </div>
    )
}

export default Quads