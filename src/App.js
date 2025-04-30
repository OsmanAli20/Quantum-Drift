import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Everyday from './pages/everyday';
import SaveInvest from './pages/save-invest';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/everyday" element={<Everyday />} />
        <Route path="/save-invest" element={<SaveInvest />} />
      </Routes>
    </div>
  );
}

export default App;
