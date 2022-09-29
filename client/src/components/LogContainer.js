import Log from "./Log";
import NavBar from "./NavBar";
// import Container from '@mui/material/Container';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import Paper from '@mui/material/Paper';
// import TableContainer from '@mui/material/TableContainer';
// import Table from '@mui/material/Table';


function LogContainer({  userData, handleDeleteLog, handleUpdateLog}) {


//  console.log(userData)
    return (
        <div>
            <NavBar />
                        {userData.logs?.map(log => <Log 
                            key = {log.id}
                            log = {log}
                            handleUpdateLog={handleUpdateLog}

                            handleDeleteLog={handleDeleteLog}
                        />)}

        </div>
    )
}

export default LogContainer;