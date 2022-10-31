
import './App.css';
import React from 'react';
import {BrowserRouter as Router , Route ,Redirect,Switch} from 'react-router-dom'
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
function App() {
  return (
   <React.StrictMode>
   <Router>
   <MainNavigation/>
   <main>
    <Switch>
   <Route path="/" exact>
    <Users/>
   </Route>
   <Route path="/:userId/places" exact>
    <UserPlaces/>
   </Route>
   <Route path="/place/new"  exact>
    <NewPlace/>
   </Route>
   <Redirect to="/"/>
   </Switch></main>
  </Router></React.StrictMode>
  
  );
}

export default App;
