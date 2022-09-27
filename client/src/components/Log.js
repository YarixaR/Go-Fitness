import NavBar from "./NavBar";
import { useEffect, useState, useRef  } from 'react'
import { useParams } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Log({ exercise, logs, renderingNewLogs, userData, handleRemove }) {

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

    //   console.log(logs.reps)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/logs/${logs.id}`, {
          method: 'PATCH',
          headers: {"Content-Type": "application/json" },
          body: JSON.stringify({
            sets: sets,
            reps: reps,
            weight: weight

          })
        }).then((resp) => resp.json())
          .then(updatedObj => renderingNewLogs(updatedObj))
          e.target.reset()
        }

    const handleDelete = (log) => {
        const id = log.id
        fetch(`/logs/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            handleRemove(log)

        });
            
    }

    return(
        <div>
            <NavBar />
            <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Exercise</TableCell>
                        <TableCell align="right"># of Sets</TableCell>
                        <TableCell align="right">Reps</TableCell>
                        <TableCell align="right">Weight</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {userData.logs?.map((log) => (
                        <TableRow
                        ref={refOne} onClick={e => handleExistingLog(e, log.id)}
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
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
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
             <TextField onChange={handleChangeSets} id="standard-basic" label="# of Sets" variant="standard" type='number' name="sets" />
             <TextField onChange={handleChangeReps} id="standard-basic" label="Reps" variant="standard" type='number' name="reps" />
             <TextField onChange={handleChangeWeight} id="standard-basic" label="Weight" variant="standard" type='number' name="weight" />
             <Button type = "submit" variant="outlined" size="small">Log</Button>
            </Box> 
            : null
        }
        </div>
    )

}
