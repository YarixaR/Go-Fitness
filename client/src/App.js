import './stylesheets/App.css';
import { React, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/Home';

function App() {

  const [ exercise, setExercise ] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/exercise")
    .then(resp => resp.json())
    .then(data => setExercise(data))
  },[])



  return (
    <Switch>
        {/* <Route exact path="/user/:id">
          <Log />
        </Route>
        <Route exact path="/abs">
          <Abs />
        </Route>
        <Route exact path="/legs">
          <Legs />
        </Route>
        <Route exact path="/back">
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
          <Login />
        </Route>
       <Route exact path="/">
          <LandingPage/>
        </Route>
    </Switch>
  );
}

export default App;
