import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Everyday from './pages/everyday';
import FamilyParent from './pages/familyParent';
import FamilyChild from './pages/familyChild';
import FamilyGrandParent from './pages/familyGrandParent';
import SaveMatch from './pages/saveMatch';
import SavingGoals from './pages/savingGoals';
import HelpGuide from './pages/helpGuide';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<FamilyParent />} />
        <Route path="/family-child" element={<FamilyChild />} />
        <Route path="/family-grandparent" element={<FamilyGrandParent />} />
        <Route path="/everyday" element={<Everyday />} />
        <Route path="/save-match" element={<SaveMatch />} />
        <Route path="/saving-goals" element={<SavingGoals />} />
        <Route path="/help-guide" element={<HelpGuide />} />
      </Routes>
    </div>
  );
}

export default App;
