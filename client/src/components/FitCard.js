import { useState } from "react";
import * as React from 'react';

// import { useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


function FitCard({ id, exercise, bodyPart, equipment, gifUrl, name, target, handleAddLogs }) {

    const [isClicked, setIsClicked] = useState(false)
    const [ form, setForm ] = useState({})
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
      const action = (
        <React.Fragment>
          {/* <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button> */}
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
    



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
    }
// console.log(gifUrl, 'fitcard')

    return(
        <div>
            
                <Card sx={{ maxWidth: 400, ml: '15px' }}>
                    <CardContent sx={{ alignContent:'center', display: 'flex'}} >
                    <CardMedia
                        onClick={ handleImage } 
                        component="img"
                        sx={{ width: 210 }}
                        image={gifUrl} 
                        alt={name}
                    />
                    <Stack >
                    <Typography gutterBottom variant="h6" component="div">{ name }</Typography>
                    <Typography variant="body2" color="text.secondary">Focus: { bodyPart }</Typography>
                    <Typography variant="body2" color="text.secondary">Targeted muscle: { target }</Typography>
                    <Typography variant="body2" color="text.secondary">Equipment: { equipment }</Typography>
                    </Stack>
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
                        {/* <Button type = "submit" variant="outlined" size="small">Log</Button> */}
                        <Button type = "submit" onClick={handleClick}>Log</Button>
                            <Snackbar
                                open={open}
                                autoHideDuration={6000}
                                onClose={handleClose}
                                message="Added to Log"
                                action={action}
                            />
                    </Box> 
                    : null
                    }
                </Card>

        </div>
    )
}

export default FitCard;


