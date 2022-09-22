import './stylesheets/App.css';
import { React, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/Home';
import Abs from './components/Abs';
import Quads from './components/Quads';

function App() {


  const [ exercise, setExercise ] = useState([])
  const [ userData, setUserData ] = useState([])
  const [errors, setErrors] = useState([])

  const handleUser = () => {
    setUserData()
  }


  // useEffect(() => {
  //   fetch('/all_exercises')
  //   .then(resp => resp.json())
  //   .then(data => setExercise(data))
  //   .catch(err => console.error(err));
  // },[])

//! Test data
  useEffect(() => {
    fetch('/all_exercises')
    .then((res) => {
      if (res.ok) {
        res.json().then((data => setExercise(data)))
      }
  })}, [])


  useEffect(() => {
    fetch("/me").then((res) => {
        if (res.ok) {
            res.json().then((data) => {
              setUserData(data);
            });
        }else {res.json().then((json) => setErrors(json.errors))}
    });
}, []);
console.log(errors)


  return (
    <Switch>
        {/* <Route exact path="/user/:id">
          <Log />
        </Route> */}
        <Route exact path="/abs">
          <Abs exercise={ exercise }/>
        </Route>
        <Route exact path="/quads">
          <Quads exercise={ exercise } />
        </Route>
        {/* <Route exact path="/back">
          <Back />
        </Route>
        <Route exact path="/chest">
          <Chest />
        </Route> */}
        <Route path="/home">
          <Home exercise={ exercise }/>
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