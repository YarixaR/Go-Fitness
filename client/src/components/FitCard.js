import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';

function FitCard({ id, bodyPart, equipment, gifUrl, name, target, handleAddLogs, userId }) {

    const [isClicked, setIsClicked] = useState(false)
    const [ form, setForm ] = useState({})

    const handleImage = () => {
        setIsClicked(isClicked => !isClicked)
    }

    const handleChange = e => 
    setForm( pF => ({ ...pF, [ e.target.name ]: e.target.value }) )

    const handleSubmit = e => {
        e.preventDefault()
        
        const infoToSend = {
            ...form,
            bodyPart,
            equipment,
            gifUrl,
            name,
            target
        }

        console.log(infoToSend)

        fetch( '/logs', {
            method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( infoToSend )
        } )
            .then( r => r.json() )
            .then(console.log)
    }


    return(
        <div>
            <Grid >
            <Card sx={{ display: 'flex',gap: 4,'--Card-padding': (theme) => theme.spacing(9), }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div>
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">{ name }</Typography>
                <Typography variant="body2" color="text.secondary">Focus: { bodyPart }</Typography>
                <Typography variant="body2" color="text.secondary">Targeted muscle: { target }</Typography>
                <Typography variant="body2" color="text.secondary">Equipment: { equipment }</Typography>
                </CardContent>
                {isClicked ? 
                 <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        '& > :not(style)': { m: 1, width: '10ch' },
                        color: 'text.primary'
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField onChange={handleChange} id="standard-basic" label="# of Sets" variant="standard" type='number' name="sets" />
                    <TextField onChange={handleChange} id="standard-basic" label="Reps" variant="standard" type='number' name="reps" />
                    <TextField onChange={handleChange} id="standard-basic" label="Weight" variant="standard" type='number' name="weight" />
                    <Button type = "submit" variant="outlined" size="small">Log</Button>
                </Box> 
                : null
                }
            </div>
            </Box>
            <CardMedia
                onClick={ handleImage } 
                component="img"
                sx={{ width: 151 }}
                image={gifUrl} 
                alt="Live from space album cover"
            />
            </Card>
            </Grid>
        </div>
    )
}

export default FitCard;


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
