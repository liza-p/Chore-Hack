import React from 'react';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Household from './pages/Household';
import Dashboard from './pages/Dashboard';
import Chores from './pages/Chores';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
        <div>
          <Switch>
            <Redirect exact path="/" to="/login" />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/household" component={Household} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/chores" component={Chores} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
