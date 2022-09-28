
import NavBar from './NavBar';
import FitCard from './FitCard';

function Back({ exercise, handleAddLogs, userId, handleUpdate, change, setChange }) {


    return(
        <div>
            <NavBar />
            <div>
                {exercise.map(back => back.bodyPart === "back" ? <FitCard 
                    key = {back.id}
                    id = {back.id}
                    bodyPart = {back.bodyPart}
                    equipment = {back.equipment}
                    gifUrl = {back.gifUrl}
                    name = {back.name}
                    target = {back.target}
                    handleAddLogs={handleAddLogs}
                    userId={ userId }
                    handleUpdate={handleUpdate}
                    change={change}
                    setChange={setChange}
                
                /> : null
                )
                }
            </div>
        </div>
    )
}

export default Back