
import NavBar from './NavBar';
import FitCard from './FitCard';

function Chest({ exercise, handleAddLogs, userId, handleUpdate, change, setChange }) {


    return(
        <div>
            <NavBar />
            <div>
                {exercise.map(chest => chest.bodyPart === "chest" ? <FitCard 
                    key = {chest.id}
                    id = {chest.id}
                    bodyPart = {chest.bodyPart}
                    equipment = {chest.equipment}
                    gifUrl = {chest.gifUrl}
                    name = {chest.name}
                    target = {chest.target}
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

export default Chest