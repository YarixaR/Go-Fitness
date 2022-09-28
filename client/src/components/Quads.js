
import NavBar from './NavBar';
import FitCard from './FitCard';

function Quads({ exercise, handleAddLogs, userId, handleUpdate, change, setChange }) {


    return(
        <div>
            <NavBar />
            <div>
                {exercise.map(quads => quads.bodyPart === "upper legs" ? <FitCard 
                    key = {quads.id}
                    id = {quads.id}
                    bodyPart = {quads.bodyPart}
                    equipment = {quads.equipment}
                    gifUrl = {quads.gifUrl}
                    name = {quads.name}
                    target = {quads.target}
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

export default Quads