
import NavBar from './NavBar';
import Card from './Card';

function Abs({ exercise }) {


    return(
        <div>
            <NavBar />
            <div>
                {exercise.map(abs => abs.target == "abs" ? <Card 
                    key = {abs.id}
                    id = {abs.id}
                    bodyPart = {abs.bodyPart}
                    equipment = {abs.equipment}
                    gifUrl = {abs.gifUrl}
                    name = {abs.name}
                    target = {abs.target}
                
                /> : null
                )
                }
            </div>
        </div>
    )
}

export default Abs