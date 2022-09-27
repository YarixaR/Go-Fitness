import './stylesheets/App.css';
import { React, useEffect, useInsertionEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/Home';
import Log from './components/Log';
import Abs from './components/Abs';
import Quads from './components/Quads';
import { useParams } from 'react-router-dom'

function App() {


  const [ exercise, setExercise ] = useState([])
  const [ userData, setUserData ] = useState('')
  const [errors, setErrors] = useState([])
  // const [ userId, setUserId ] = useState(0)
  const [ logs, setLogs ] = useState([])

  const handleUser = () => {
    setUserData()
  }

  // console.log(userData)

//! Official Fetch
  const getExercises = () => {
    fetch('/all_exercises')
      .then(resp => resp.json())
      .then(data => setExercise(data))
      .catch(err => console.error(err));
  }

  useEffect(() => {getExercises()}, [])

  const handleRemove = () => {
    getExercises()
  
  }

  // console.log(exercise)

//* DB.JSON data
  // useEffect(() => {
  //   fetch('/all_exercises')
  //   .then((res) => {
  //     if (res.ok) {
  //       res.json().then((data => setExercise(data)))
  //     }
  // })}, [])


  useEffect(() => {
    fetch("/me").then((res) => {
        if (res.ok) {
            res.json().then((data) => {
              setUserData(data);
            });
        }else {res.json().then((json) => setErrors(json.errors))}
    });
}, []);

// console.log(userData)


  useEffect(() => {
    fetch('/logs')
    .then((res) => res.json())
    .then((data) => setLogs(data))
  }, [])

  console.log(logs)

  const handleAddLogs = (addedLog) => {
    setLogs(oldLogs =>[...oldLogs, addedLog])
  }

  const renderingNewLogs = (updatedLog) => {
    const updatedResource = logs
    ? logs.map((log) => {
      if (log.id === updatedLog.id) {
        return updatedLog
      } else {return log}
    }) : null
    setLogs(updatedResource)
  }


  // const renderingWithoutDeleted = (deletedLog) => {
  //   const updatedLog = logs?.filter((log) => {
  //     if (log.id !== deletedLog.id) return true
  //   })
  //   setLogs(updatedLog)
  // }

  return (
    <Switch>
        <Route exact path="/me">
          <Log exercise={ exercise } logs={ logs } userData={userData} handleRemove={handleRemove}/>
        </Route>
        <Route exact path="/abs">
          <Abs exercise={ exercise } handleAddLogs={handleAddLogs} userId={userData} />
        </Route>
        <Route exact path="/quads">
          <Quads exercise={ exercise } handleAddLogs={handleAddLogs} userId={userData} />
        </Route>
        {/* <Route exact path="/back">
          <Back />
        </Route>
        <Route exact path="/chest">
          <Chest />
        </Route> */}
        <Route path="/home">
          <Home exercise={ exercise } />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login handleUser={ handleUser } />
        </Route>
       <Route exact path="/">
          <LandingPage/>
        </Route>
    </Switch>
  );
}

export default App;