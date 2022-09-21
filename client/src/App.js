import './stylesheets/App.css';
import { Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/SignUp';

function App() {

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
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
       <Route exact path="/">
          <LandingPage/>
        </Route>
    </Switch>
  );
}

export default App;
