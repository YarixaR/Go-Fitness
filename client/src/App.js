import './stylesheets/App.css';
import { React, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/Home';
// import Log from './components/Log';
import Abs from './components/Abs';
import Quads from './components/Quads';
import Back from './components/Back';
import UpperArms from './components/UpperArms';
import Chest from './components/Chest';
import Cardio from './components/Cardio';
// import { useParams } from 'react-router-dom'
import LogContainer from './components/LogContainer';

function App() {

  const [change, setChange] = useState(false)
  const [ exercise, setExercise ] = useState([])
  const [ userData, setUserData ] = useState('')
  const [errors, setErrors] = useState([])
  const [ logs, setLogs ] = useState([])

  // const handleUser = () => {
  //   setUserData()
  // }

  // console.log(userData)

//! Official Fetch
  const getExercises = () => {
    fetch('/all_exercises')
      .then(resp => resp.json())
      .then(data => setExercise(data))
      .catch(err => console.error(err));
  }

  // console.log(exercise)

  useEffect(() => {getExercises()}, [change])




  useEffect(() => {
    fetch("/me").then((res) => {
    if (res.ok) {
        res.json().then((data) => {
          setUserData(data);
        });
    }else {res.json().then((json) => setErrors(json.errors))}
  });
}, [change]);

   useEffect(() => {
    fetch('/logs')
    .then((res) => res.json())
    .then((data) => setLogs(data))
    }, [change])
  
  const handleUpdateLog = (updatedLog) => {
    const updatedLogs = logs.map((log) => 
      log.id === updatedLog.id ? updatedLog : log
    )
    setLogs(updatedLogs)
  }

  const handleDeleteLog = (deletedLog) => {
    const updatedLogs = logs.filter((log) => log.id !== deletedLog.id)
      setLogs(updatedLogs)
  }

  const handleAddLogs = (addedLog) => {
    setLogs(logs =>[...logs, addedLog])
  }

  return (
    <Switch>
        <Route exact path="/me">
          <LogContainer exercise={ exercise } change={change} setChange={setChange} logs={logs} handleUpdateLog={handleUpdateLog} userData={userData} handleDeleteLog={handleDeleteLog}/>
        </Route>
        <Route exact path="/abs">
          <Abs exercise={ exercise } change={change} setChange={setChange} handleAddLogs={handleAddLogs} userId={userData} />
        </Route>
        <Route exact path="/cardio">
          <Cardio exercise={ exercise } change={change} setChange={setChange} handleAddLogs={handleAddLogs} userId={userData} />
        </Route>
        <Route exact path="/quads">
          <Quads exercise={ exercise } change={change} setChange={setChange} handleAddLogs={handleAddLogs} userId={userData} />
        </Route>
        <Route exact path="/back">
          <Back exercise={ exercise } change={change} setChange={setChange} handleAddLogs={handleAddLogs} userId={userData} />
        </Route>
        <Route exact path="/arms">
          <UpperArms exercise={ exercise } change={change} setChange={setChange} handleAddLogs={handleAddLogs} userId={userData} />
        </Route>
        <Route exact path="/chest">
          <Chest exercise={ exercise } change={change} setChange={setChange} handleAddLogs={handleAddLogs} userId={userData} />
        </Route>
        <Route path="/home">
          <Home exercise={ exercise } />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login setUserData={ setUserData } />
        </Route>
       <Route exact path="/">
          <LandingPage/>
        </Route>
    </Switch>
  );
}

export default App;

//* DB.JSON data
  // useEffect(() => {
  //   fetch('/all_exercises')
  //   .then((res) => {
  //     if (res.ok) {
  //       res.json().then((data => setExercise(data)))
  //     }
  // })}, [])
