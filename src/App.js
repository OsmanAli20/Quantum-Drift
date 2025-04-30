import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Everyday from './pages/everyday';
import FamilyParent from './pages/familyParent';
import SaveMatch from './pages/saveMatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<FamilyParent />} />
        <Route path="/everyday" element={<Everyday />} />
        <Route path="/save-match" element={<SaveMatch />} />
      </Routes>
    </div>
  );
}

export default App;
