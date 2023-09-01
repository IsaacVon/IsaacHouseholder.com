import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Education from './pages/education';
import Experience from './pages/experience';
import Hobbies from './pages/hobbies';
import Home from './pages/home';
import NavBar from './components/navBar';
import Objective from './pages/objective';
import Portfolio from './pages/portfolio';
import Recommendations from './pages/recommendations';
import Skills from './pages/skills';

import './App.css';

function App() {
  const [expandNav, setExpandNav] = useState(false);

  const toggleNav = () => {
    expandNav ? setExpandNav(false) : setExpandNav(true);
  };

  const closeNav = () => {
    setExpandNav(false);
  };

  return (
    <Router>
      <NavBar expandNav={expandNav} toggleNav={toggleNav} />
      <Routes>
        <Route path='/portfolio' element={<Portfolio closeNav={closeNav} />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/recommendations' element={<Recommendations />} />
        <Route path='/objective' element={<Objective />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
        <Route path='/hobbies' element={<Hobbies />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
