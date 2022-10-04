import { useState } from 'react'
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { cyan } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Log({ exercise, log, handleDeleteLog, handleUpdateLog, userData  }) {

    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [existingLogId, setExistingLogId] = useState("")
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleChangeSets = (e) => {
        setSets(e.target.value)
      }

    const handleChangeReps = (e) => {
        setReps(e.target.value)
      }

    const handleChangeWeight = (e) => {
        setWeight(e.target.value)
      }

    const handleSubmit = (e) => {
      e.preventDefault()
      const updatedObj = {
         sets,
         reps,
         weight
      }
        fetch(`/logs/${log.id}`, {
          method: 'PATCH',
          headers: {"Content-Type": "application/json" },
          body: JSON.stringify(updatedObj),
        })
        .then((resp) => resp.json())
        .then(handleUpdateLog)
        
    }

    const handleDelete = (log) => {
        const id = log.id
        fetch(`/logs/${id}`, {
            method: "DELETE",
        })
        .then(() => {
          handleDeleteLog(log)

        }); 
    }
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    return(
        <div>
            <Card sx={{ maxWidth: 345, ml: '50px' }}>
                  <CardHeader
                    sx={{ textTransform: 'capitalize' }}
                    avatar={
                      <Avatar sx={{ bgcolor: cyan[800] }} aria-label={userData.name}>
                        {userData.name}
                      </Avatar>
                    }
                    title={log.exercise.name}
                    subheader={date}
                    >
      
                    </CardHeader>      
                  <CardContent>
                    <Typography fontFamily='Sarabun' variant="p" color="text.secondary">
                    Sets | Reps | Weight
                    </Typography>
                    <Stack direction="row" spacing={2}  divider={<Divider orientation="vertical" flexItem sx={{ justifyContent: 'flex-end' }} />}>
                      <Typography variant="h6" color='textPrimary' fontFamily='Neusanextpro,sans-serif' sx={{ letterSpacing: '-.07em'}} >{ log.sets }</Typography>
                      <Typography variant="h6" color='textPrimary' fontFamily='Neusanextpro,sans-serif' sx={{ letterSpacing: '-.07em'}} >{ log.reps }</Typography>
                      <Typography variant="h6" color='textPrimary' fontFamily='Neusanextpro,sans-serif' sx={{ letterSpacing: '-.07em'}}>{ log.weight }</Typography>
                    </Stack>
                  </CardContent>
                  <CardActions disableSpacing>
                  <Chip label="Remove" size="small" onClick={e => handleDelete(log)}/>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography fontFamily='Neusanextpro,sans-serif' fontWeight='600' sx={{ letterSpacing: '-.07em', lineHeight: '100%' }} paragraph>Edit Workout</Typography>
                      <Box
                      component="form"
                      sx={{
                          '& > :not(style)': { m: 1, width: '10ch' },
                          color: 'text.primary'
                      }}
                      noValidate
                      autoComplete="off"
                      >
                  <TextField onChange={handleChangeSets} id="standard-basic" label="# of Sets" variant="standard" type='number' name="sets" />
                  <TextField onChange={handleChangeReps} id="standard-basic" label="Reps" variant="standard" type='number' name="reps" />
                  <TextField onChange={handleChangeWeight} id="standard-basic" label="Weight" variant="standard" type='number' name="weight" />
                  <Button type = "submit" variant="outlined" size="small" onClick={handleSubmit}>Update</Button>
                  </Box> 
                    </CardContent>
                  </Collapse>
                </Card>
        </div>
    )

}
