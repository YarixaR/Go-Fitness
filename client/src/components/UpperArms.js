import NavBar from './NavBar';
import FitCard from './FitCard';

function UpperArms({ exercise, handleAddLogs, userId, handleUpdate }) {


    return(
        <div>
            <NavBar />
            <div>
                {exercise.map(arm => arm.bodyPart == "upper arms" ? <FitCard 
                    key = {arm.id}
                    id = {arm.id}
                    bodyPart = {arm.bodyPart}
                    equipment = {arm.equipment}
                    gifUrl = {arm.gifUrl}
                    name = {arm.name}
                    target = {arm.target}
                    handleAddLogs={handleAddLogs}
                    userId={ userId }
                    handleUpdate={handleUpdate}
                
                /> : null
                )
                }
            </div>
        </div>
    )
}

export default UpperArms