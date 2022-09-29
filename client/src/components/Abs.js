
import NavBar from './NavBar';
import FitCard from './FitCard';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';

function Abs({ exercise, handleAddLogs, userId, handleUpdate}) {



    return(
        <div>
            <NavBar />
            <div>
                {exercise.map(abs => abs.bodyPart === "waist" ? <FitCard 
                    key = {abs.id}
                    id = {abs.id}
                    bodyPart = {abs.bodyPart}
                    equipment = {abs.equipment}
                    gifUrl = {abs.gifUrl}
                    name = {abs.name}
                    target = {abs.target}
                    handleAddLogs={handleAddLogs}
                    userId={userId}
                    exercise={exercise}
                    handleUpdate={handleUpdate}
    
                
                /> : null
                )
                }
            </div>
        </div>
    )
}

export default Abs