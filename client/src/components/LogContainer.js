import Log from "./Log";
import NavBar from "./NavBar";
import Container from '@mui/material/Container';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';


function LogContainer({  userData, handleDeleteLog, handleUpdateLog}) {


//  console.log(userData)
    return (
        <div>
            <NavBar />
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
                        {userData.logs?.map(log => <Log 
                            key = {log.id}
                            log = {log}
                            handleUpdateLog={handleUpdateLog}

                            handleDeleteLog={handleDeleteLog}
                        />)}
                </Table>
            </TableContainer>

        </div>
    )
}

export default LogContainer;