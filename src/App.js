import React from 'react';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/pages/Home'
import Services from './Components/pages/Services'
import SignUp from './Components/pages/SignUp'
import './App.css'
function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Switch>
       <Route path='/' exact component= {Home} />
       <Route path='/services' exact component= {Services} />
       <Route path='/sign-up' exact component= {SignUp} />
     </Switch>
     </Router>
    </>
  );
}

export default App;
