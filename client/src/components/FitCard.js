import { useState } from "react";
// import { useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
// import Divider from '@mui/material/Divider';

function FitCard({ id, exercise, bodyPart, equipment, gifUrl, name, target, handleAddLogs }) {

    const [isClicked, setIsClicked] = useState(false)
    const [ form, setForm ] = useState({})
    // const [errors, setErrors] = useState([])
    // const history = useHistory()


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

        // console.log(infoToSend)

        fetch( '/logs', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( infoToSend ),
        } )
            .then( r => r.json() )
            .then(handleAddLogs)
            e.target.reset()

        // fetch( '/logs', {
        //     method: 'POST', headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify( infoToSend )
        // } )
        // .then(r => {
        //     if(r.ok){
        //         r.json().then(addedLog => {
        //             handleAddLogs(addedLog)
        //             history.push('/me')
        //         })
        //     }else {
        //         r.json().then(data => {
        //             setErrors(data.errors)
        //         })
        //     }
        // })
     
    }
// console.log(gifUrl)

    return(
        <div>
        <Grid >
            <Card sx={{ display: 'flex',gap: 4,'--Card-padding': (theme) => theme.spacing(9), }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
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
            </Box>
            <CardMedia
                onClick={ handleImage } 
                component="img"
                sx={{ width: 151 }}
                image={gifUrl} 
                alt={name}
            />
            </Card>
        </Grid>
        </div>
    )
}

export default FitCard;


