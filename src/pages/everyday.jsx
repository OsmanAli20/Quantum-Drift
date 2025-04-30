import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Everyday() {
  const navigate = useNavigate();

  return (
    <div className="bank-app">
      <header className="app-header">
        <div className="header-icons">
          <span className="icon">✉️</span>
          <span className="greeting">Hi Alex</span>
          <div className="right-icons">
            <span className="icon">❓</span>
            <span className="icon">👥</span>
          </div>
        </div>
        <div className="tab-bar">
          <button className="tab-button" onClick={() => navigate('/')}>Summary</button>
          <button className="tab-button active">Everyday</button>
          <button className="tab-button" onClick={() => navigate('/save-invest')}>Save &</button>
        </div>
      </header>
      <main className="account-summary">
        <h2>Everyday Banking</h2>
        <p>Manage your daily finances and track your spending here.</p>
      </main>
    </div>
  );
}

export default Everyday; 