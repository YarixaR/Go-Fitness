import Log from "./Log";
import NavBar from "./NavBar";
import { Typography, Box } from '@mui/material';




function LogContainer({exercise, logs, userData, handleDeleteLog, handleUpdateLog, setLogs, setUserData }) {


//  console.log(userData)
    return (
        <div className="log-container">
            <NavBar setUserData={setUserData} setLogs={setLogs}/>
                {/* <Typography fontFamily='Sarabun' variant="h5">{userData.name}'s Workout of the Day</Typography> */}
                <Typography fontFamily='Neusanextpro,sans-serif' fontWeight='600' variant='h4' sx={{ letterSpacing: '-.07em', lineHeight: '100%', ml:'540px', pb: '30px' }}>{userData.name}'s Workout of the Day</Typography>
                    <Box 
                    sx={{ 
                        display: 'grid',
                        columnGap: 3,
                        rowGap: 3,
                        gridTemplateColumns: 'repeat(3, 1fr)',
                    }}
                    >
                        {logs.map(log => <Log 
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