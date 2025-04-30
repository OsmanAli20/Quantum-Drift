import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function FamilySharing() {
  const navigate = useNavigate();

  return (
    <div className="bank-app">
      <header className="app-header">
        <div className="header-icons">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
          <span className="icon">✉️</span>
          <span className="greeting">Hi Alex</span>
          <div className="right-icons">
            <span className="icon">❓</span>
            <span className="icon">👥</span>
          </div>
        </div>
        <div className="tab-bar">
          <button className="tab-button" onClick={() => navigate('/')}>Summary</button>
          <button className="tab-button active" onClick={() => navigate('/familyparent')}>Family</button>
          <button className="tab-button" onClick={() => navigate('/everyday')}>Everyday</button>
        </div>
      </header>
      <main className="account-summary">
        <h2>Family Sharing</h2>
        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Family Savings Pot</span>
            <span className="account-number">Total Contributions</span>
          </div>
          <span className="account-balance">£4650.00</span>
        </div>
        <button className="add-button">+ Add Shared Pot</button>

        <h2>Family Pots</h2>
        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Children's Pot (A Jones)</span>
            <span className="account-number">Total Contributions</span>
          </div>
          <span className="account-balance">£50.00</span>
        </div>

        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Children's Pot (H Jones)</span>
            <span className="account-number">Total Contributions</span>
          </div>
          <span className="account-balance">£73.00</span>
        </div>
        <button className="add-button">+ Add Children's Pot</button>
      </main>
    </div>
  );
}

export default FamilySharing; 