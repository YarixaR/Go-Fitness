import { useState, useRef  } from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';



export default function Log({ log, handleDeleteLog, handleUpdateLog,  }) {

    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [existingLogId, setExistingLogId] = useState("")
  

    const [isClicked, setIsClicked] = useState(false)
  
    const refOne = useRef(null)
  
    const handleExistingLog = (e, id) => {
      e.preventDefault()
      if(refOne.current.contains(e.target)) {
        setIsClicked(!isClicked)
        setExistingLogId(id)
      }
    }

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
      const updatedObj = {
        sets: sets,
        reps: reps,
        weight: weight
      }
        e.preventDefault()
        fetch(`/logs/${log.id}`, {
          method: 'PATCH',
          headers: {"Content-Type": "application/json" },
          body: JSON.stringify(updatedObj),
        })
        .then((resp) => resp.json())
          .then(log => {
            handleUpdateLog(log)
 
          })
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
// console.log(log)
    return(
        <div>
          <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1,
                    width: 250,
                    height: 250,
                  },
                }}
                >
                <Paper elevation={3} sx={{ textAlign: 'center' }}>
                  <Typography color='textPrimary' variant="h9" sx={{ textTransform: 'capitalize' }}>{log.exercise.name}</Typography>
                  <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                    <Typography align='center'># of Sets</Typography>
                    <Typography align='center'>Reps</Typography>
                    <Typography align='center'>Weight</Typography>
                  </Stack>
                      <Divider variant="middle" />
                  <Stack direction="row" spacing={2}  divider={<Divider orientation="vertical" flexItem sx={{ justifyContent: 'flex-end' }} />}>
                    <Typography sx={{ textAlign: 'left' }}  color='textPrimary' >{ log.sets }</Typography>
                    <Typography sx={{ textAlign: 'center' }}  color='textPrimary' >{ log.reps }</Typography>
                    <Typography sx={{ textAlign: 'right' }} color='textPrimary'>{ log.weight }</Typography>
                    <Stack >
                    <Chip label="Remove" size="small" onClick={e => handleDelete(log)}/>
                    <Chip label="Edit" size="small" ref={refOne} onClick={e => handleExistingLog(e, log.id)}/>
                    </Stack>
                    {isClicked ? 
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
                : null
                } 
                  </Stack>
                </Paper>
                
            </Box>
        </div>
    )

}


            {/* <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                      <TableCell>Exercise</TableCell>
                      <TableCell align="right"># of Sets</TableCell>
                      <TableCell align="right">Reps</TableCell>
                      <TableCell align="right">Weight</TableCell>
                  </TableRow>
                </TableHead>
              <TableBody x={{ minWidth: 650 }}>
                <TableRow
                key={log.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                  {log.exercise.name}
                </TableCell>
                <TableCell align="right">{log.sets}</TableCell>
                <TableCell align="right">{log.reps}</TableCell>
                <TableCell align="right">{log.weight}</TableCell>
                <TableCell>
                    <Chip label="Remove" size="small" onClick={e => handleDelete(log)}/>
                    <Chip label="Edit" size="small" ref={refOne} onClick={e => handleExistingLog(e, log.id)}/>
                </TableCell>
                </TableRow>
              </TableBody>
           
                {isClicked ? 
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
                : null
                } 
              </Table>
            </TableContainer> */}







   
            // <h1>{log.sets} {log.reps} {log.weight}</h1>
            // <form onSubmit={handleSubmit} >

            //     <input type='number' name="sets" value={sets} onChange={handleChangeSets} />
            //     <input type='number' name="sets" value={reps} onChange={handleChangeReps} />
            //     <input type='number' name="sets" value={weight} onChange={handleChangeWeight} />
            
            //     <button type='submit'>edit</button>
            // </form>