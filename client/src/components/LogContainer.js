import Log from "./Log";
import NavBar from "./NavBar";



function LogContainer({ userData, handleRemove, handleUpdate, fetchCurrentUser}) {

// const logComponents = userData.logs.map((log) => {
//     return console.log(log)
//     <Log 
//     key={log.id}
//     log={log}
//     handleRemove={handleRemove}
//     handleUpdate={handleUpdate}
//     />
// })

 
    return (
        <div>
            <NavBar />
         {userData.logs?.map(log => <Log 
            key = {log.id}
            log = {log}
            handleRemove={handleRemove}
            handleUpdate={handleUpdate}
            fetchCurrentUser={fetchCurrentUser}
         />)}
        </div>
    )
}

export default LogContainer;