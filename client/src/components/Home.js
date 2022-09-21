import { NavLink } from 'react-router-dom'
import NavBar from './NavBar';
import Card from './Card';

function Home({exercise}) {

    const exerciseCard = exercise.map(ex =>{
        return <Card 
        key = {ex.id}
        id = {ex.id}
        bodyPart = {ex.bodyPart}
        equipment = {ex.equipment}
        gifUrl = {ex.gifUrl}
        name = {ex.name}
        target = {ex.target}
        />
    })

    return(
        <div>
            <NavBar />
            <div>
                {exerciseCard}
            </div>
        </div>
    )
}

export default Home;