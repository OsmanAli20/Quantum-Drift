import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Everyday from './pages/everyday';
import FamilyParent from './pages/familyParent';
import SaveMatch from './pages/saveMatch';
import FamilyChild from './pages/familyChild'; 
import SavingGoals from './pages/savingGoals';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<FamilyParent />} />
        <Route path="/family-child" element={<FamilyChild/>} />
        <Route path="/everyday" element={<Everyday />} />
        <Route path="/save-match" element={<SaveMatch />} />
        <Route path="/saving-goals" element={<SavingGoals />} />
      </Routes>
    </div>
  );
}

export default App;
