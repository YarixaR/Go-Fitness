import Log from "./Log";
import NavBar from "./NavBar";
import Container from '@mui/material/Container';



function LogContainer({  userData, handleDeleteLog, handleUpdateLog}) {


//  console.log(userData)
    return (
        <div>
            <NavBar />
        <Container maxWidth="sm">    
         {userData.logs?.map(log => <Log 
            key = {log.id}
            log = {log}
            handleUpdateLog={handleUpdateLog}

            handleDeleteLog={handleDeleteLog}
         />)}
         </Container>

        </div>
    )
}

export default LogContainer;