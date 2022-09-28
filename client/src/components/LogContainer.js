import Log from "./Log";
import NavBar from "./NavBar";



function LogContainer({  userData, change, setChange, handleDeleteLog, handleUpdateLog}) {

// const logComponents = userData.logs.map((log) => {
//     return console.log(log)
//     <Log 
//     key={log.id}
//     log={log}
//     handleRemove={handleRemove}
//     handleUpdate={handleUpdate}
//     />
// })

 console.log(userData)
    return (
        <div>
            <NavBar />
         {userData.logs?.map(log => <Log 
            key = {log.id}
            log = {log}
            handleUpdateLog={handleUpdateLog}
            change={change}
            setChange={setChange}
            handleDeleteLog={handleDeleteLog}
         />)}
        </div>
    )
}

export default LogContainer;