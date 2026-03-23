import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/movement" element={<MovementInfoPage />} />
          <Route path="/massage" element={<MassageInfoPage />} />
          <Route path="/meditation" element={<MeditationInfoPage />} />
          <Route path="/artwork" element={<ArtworkPage />} />
        </Routes>
        <div id = "contact">
            <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;