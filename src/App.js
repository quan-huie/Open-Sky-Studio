import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//page components
import AboutPage from './AboutMe/AboutMe';
import HomePage from './HomePage/HomePage';
import ServicesPage from './ServicesPage/ServicesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/services" component={ServicesPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
