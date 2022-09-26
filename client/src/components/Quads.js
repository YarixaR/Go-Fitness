
import NavBar from './NavBar';
import FitCard from './FitCard';

function Quads({ exercise, handleAddLogs, userId }) {


    return(
        <div>
            <NavBar />
            <div>
                {exercise.map(quads => quads.target == "quads" ? <FitCard 
                    key = {quads.id}
                    id = {quads.id}
                    bodyPart = {quads.bodyPart}
                    equipment = {quads.equipment}
                    gifUrl = {quads.gifUrl}
                    name = {quads.name}
                    target = {quads.target}
                    handleAddLogs={handleAddLogs}
                    userId={ userId }
                
                /> : null
                )
                }
            </div>
        </div>
    )
}

export default Quads