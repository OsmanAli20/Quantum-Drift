import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function SaveInvest() {
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
          <button className="tab-button" onClick={() => navigate('/everyday')}>Everyday</button>
          <button className="tab-button active">Save &</button>
        </div>
      </header>
      <main className="account-summary">
        <h2>Save & Invest</h2>
        <p>Explore your savings and investment options.</p>
      </main>
    </div>
  );
}

export default SaveInvest; 