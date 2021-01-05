import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//page components
import AboutPage from './AboutMe/AboutMe';
import HomePage from './HomePage/HomePage';
import PricingPage from './PricingPage/PricingPage';
import PilatesInfoPage from './ServicesPage/PilatesInfoPage';
import MassageInfoPage from './ServicesPage/MassageInfoPage';
import StretchingInfoPage from './ServicesPage/StretchingInfoPage';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/pricing" component={PricingPage}></Route>
          <Route exact path="/pilates" component={PilatesInfoPage}></Route>
          <Route exact path="/massage" component={MassageInfoPage}></Route>
          <Route exact path="/stretching" component={StretchingInfoPage}></Route>

        </Switch>
        <div id = "contact">
            <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
