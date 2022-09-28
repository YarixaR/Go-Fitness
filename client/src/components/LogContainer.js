import Log from "./Log";
import NavBar from "./NavBar";
import Container from '@mui/material/Container';



function LogContainer({  userData, change, setChange, handleDeleteLog, handleUpdateLog}) {


//  console.log(userData)
    return (
        <div>
            <NavBar />
        <Container maxWidth="sm">    
         {userData.logs?.map(log => <Log 
            key = {log.id}
            log = {log}
            handleUpdateLog={handleUpdateLog}
            change={change}
            setChange={setChange}
            handleDeleteLog={handleDeleteLog}
         />)}
         </Container>

        </div>
    )
}

export default LogContainer;