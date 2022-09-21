import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

function Card({ id, bodyPart, equipment, gifUrl, name, target }) {

    const [isClicked, setIsClicked] = useState(false)

    const handleImage = () => {
        setIsClicked(isClicked => !isClicked)
    }

    return(
        <div>
          
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Stack direction="row" spacing={2}>
            <img onClick={ handleImage } src={gifUrl} alt="gif"/>
            <div>
                <CardContent>
                <Typography gutterBottom variant="h4" component="div">{ name }</Typography>
                <Typography variant="body2" color="text.secondary">Focus: { bodyPart }</Typography>
                <Typography variant="body2" color="text.secondary">Targeted muscle: { target }</Typography>
                <Typography variant="body2" color="text.secondary">Equipment: { equipment }</Typography>
                </CardContent>
                {isClicked
                 ? <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '10ch' },
                        color: 'text.primary'
                    }}
                    noValidate
                    autoComplete="off"
                 >
                    <TextField id="standard-basic" label="# of Sets" variant="standard" type='number' name="sets" />
                    <TextField id="standard-basic" label="Reps" variant="standard" type='number' name="reps" />
                    <TextField id="standard-basic" label="Weight" variant="standard" type='number' name="weight" />
                    <Button variant="outlined" size="small">Log</Button>
                </Box> 
                : null
                }
            </div>
            </Stack>
            </Box>

        </div>
    )
}

export default Card;


    // const exerciseCard = exercise.map(ex =>{
    //     return <Card 
    //     key = {ex.id}
    //     id = {ex.id}
    //     bodyPart = {ex.bodyPart}
    //     equipment = {ex.equipment}
    //     gifUrl = {ex.gifUrl}
    //     name = {ex.name}
    //     target = {ex.target}
    //     />
    // })
