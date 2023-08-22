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
import MovementInfoPage from './ServicesPage/MovementInfoPage';
import MassageInfoPage from './ServicesPage/MassageInfoPage';
import MeditationInfoPage from './ServicesPage/MeditationInfoPage';
import ArtworkPage from './ArtworkPage/ArtworkPage';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
          <Route exact path="/pricing" component={PricingPage}></Route>
          <Route exact path="/movement" component={MovementInfoPage}></Route>
          <Route exact path="/massage" component={MassageInfoPage}></Route>
          <Route exact path="/meditation" component={MeditationInfoPage}></Route>
          <Route exact path="/artwork" component={ArtworkPage}></Route>

        </Switch>
        <div id = "contact">
            <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
