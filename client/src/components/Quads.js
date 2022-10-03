
import NavBar from './NavBar';
import FitCard from './FitCard';

function Quads({ exercise, handleAddLogs, userId, handleUpdate, setUserData, setLogs }) {


    return(
        <div>
            <NavBar setUserData={setUserData} setLogs={setLogs} userId={userId}/>
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
                    handleUpdate={handleUpdate}
               
                /> : null
                )
                }
            </div>
        </div>
    )
}

export default Quads