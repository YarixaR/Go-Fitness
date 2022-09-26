
import NavBar from './NavBar';
import FitCard from './FitCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Abs({ exercise, handleAddLogs, userId}) {



    return(
        <div>
            <NavBar />
            <div>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={11}>
                        {exercise.map(abs => abs.target == "abs" ? <FitCard 
                            key = {abs.id}
                            id = {abs.id}
                            bodyPart = {abs.bodyPart}
                            equipment = {abs.equipment}
                            gifUrl = {abs.gifUrl}
                            name = {abs.name}
                            target = {abs.target}
                            handleAddLogs={handleAddLogs}
                            userId={userId}

                        
                        /> : null
                        )
                        }
                    </Grid>
                </Grid>
            </Container>
            </div>
        </div>
    )
}

export default Abs