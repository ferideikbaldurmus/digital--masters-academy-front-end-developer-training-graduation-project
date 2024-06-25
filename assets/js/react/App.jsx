// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SpaceGallery from './pages/spacegallery';
import SpaceNews from './pages/spacenews';
import Planets from './pages/planets';
import Stars from './pages/stars';
import Asteroids from './pages/asteroids';
import Astronauts from './pages/astronauts';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/spacegallery">Space Gallery</Link></li>
          <li><Link to="/spacenews">Space News</Link></li>
          <li><Link to="/planets">Planets</Link></li>
          <li><Link to="/stars">Stars</Link></li>
          <li><Link to="/asteroids">Asteroids</Link></li>
          <li><Link to="/astronauts">Astronauts</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/spacegallery" element={<SpaceGallery />} />
        <Route path="/spacenews" element={<SpaceNews />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/stars" element={<Stars />} />
        <Route path="/asteroids" element={<Asteroids />} />
        <Route path="/astronauts" element={<Astronauts />} />
      </Routes>
    </Router>
  );
};

export default App;
