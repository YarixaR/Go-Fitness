import Log from "./Log";
import NavBar from "./NavBar";
// import Container from '@mui/material/Container';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import Paper from '@mui/material/Paper';
// import TableContainer from '@mui/material/TableContainer';
// import Table from '@mui/material/Table';
import { Typography, Box } from '@mui/material';




function LogContainer({exercise, userData, handleDeleteLog, handleUpdateLog}) {


//  console.log(userData)
    return (
        <div>
            <NavBar />
                <Typography variant="h5">{userData.name}'s Workout of the Day</Typography>
                    <Box 
                    sx={{ 
                        display: 'grid',
                        columnGap: 3,
                        rowGap: 3,
                        gridTemplateColumns: 'repeat(3, 1fr)',
                    }}
                    >
                        {userData.logs?.map(log => <Log 
                            key = {log.id}
                            log = {log}
                            handleUpdateLog={handleUpdateLog}
                            userData={userData}
                            handleDeleteLog={handleDeleteLog}
                            exercise={ exercise } 
                        />)}
            </Box>
        </div>
    )
}

export default LogContainer;