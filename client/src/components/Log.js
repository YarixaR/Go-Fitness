import NavBar from "./NavBar";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';


function Log({ exercise, logs, renderingNewLogs, userData, handleRemove }) {

    // const [user, setUser] = useState()
    // const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    // const {logs} = userData

    // const params = useParams()
    // const {id} = params

    // useEffect(()=>{
    //     fetch(`/me`)
    //     .then(res => {
    //         if(res.ok){
    //             res.json().then(user => {
    //                 handleUser(user)

    //             })
    //         }else {
    //             res.json().then(data => setErrors(data.error))
    //         }
    //     })     
    // }, [])
    


    // if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>

//! this code deleted without refreshing
    // const handleDelete = (log) => {
    //     const id = log.id
    //     fetch( `/logs/${id}`, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         const newUser = {...userData}
    //         newUser.exercises = userData.exercises?.filter((ex) => {
    //             if(ex.id !== log.exercise_id) return true
    //         })
    //         handleUser(newUser)
    //         handleRemove(log)
    //     })
    // }

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
        </div>
    )
}


export default Log;



