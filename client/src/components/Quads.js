
import NavBar from './NavBar';
import FitCard from './FitCard';

function Quads({ exercise }) {


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
                
                /> : null
                )
                }
            </div>
        </div>
    )
}

export default Quads