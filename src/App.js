import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Family from './pages/family';
import Everyday from './pages/everyday';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<Family />} />
        <Route path="/everyday" element={<Everyday />} />
      </Routes>
    </div>
  );
}

export default App;
