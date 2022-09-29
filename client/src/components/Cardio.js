
import NavBar from './NavBar';
import FitCard from './FitCard';

function Cardio({ exercise, handleAddLogs, userId, handleUpdate }) {


    return(
        <div>
            <NavBar />
            <div>
                {exercise.map(cardio => cardio.bodyPart === "cardio" ? <FitCard 
                    key = {cardio.id}
                    id = {cardio.id}
                    bodyPart = {cardio.bodyPart}
                    equipment = {cardio.equipment}
                    gifUrl = {cardio.gifUrl}
                    name = {cardio.name}
                    target = {cardio.target}
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

export default Cardio