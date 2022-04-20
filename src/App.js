import React, { useState } from 'react';
import './App.css';
import Header from './components/heading/header';
import Competitions from './components/main/competitions';
import { BrowserRouter as Router, Routes, Route, Navigate,} from 'react-router-dom';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/competitions" />} />
          <Route path='/competitions' element={<Competitions />} />
          {/* <Route path='/competitions/:id/teams' element={<Teams />} pattern="./pages/teams" />
          <Route path='/competitions/:id/matches' element={<Matches />} pattern="./pages/matches" /> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
