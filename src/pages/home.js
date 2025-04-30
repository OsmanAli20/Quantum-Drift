import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
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
          <button className="tab-button active">Summary</button>
          <button className="tab-button" onClick={() => navigate('/everyday')}>Everyday</button>
          <button className="tab-button" onClick={() => navigate('/save-invest')}>Save &</button>
        </div>
      </header>

      <main className="account-summary">
        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Personal Current Account</span>
            <span className="account-number">00-00-00 / 12345678</span>
          </div>
          <span className="account-balance">£2,023.00</span>
        </div>

        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Mortgage Account</span>
            <span className="account-number">987650234</span>
          </div>
          <span className="account-balance">£155,685.00</span>
        </div>

        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Credit Card</span>
            <span className="account-number">•••• •••• •••• 1234</span>
          </div>
          <span className="account-balance">£1,237.23</span>
        </div>

        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Savings</span>
            <span className="account-number">00-00-00 / 12345678</span>
          </div>
          <span className="account-balance">£5,000.00</span>
        </div>

        <section className="spaces-section">
          <h2>Your spaces</h2>
          
          <div className="space-card" onClick={() => navigate('/bank360')}>
            <div className="space-icon green">🏦</div>
            <div className="space-details">
              <h3>Lloyds Bank 360</h3>
              <p>Your bespoke benefits, like free financial coaching</p>
            </div>
            <span className="chevron">›</span>
          </div>

          <div className="space-card" onClick={() => navigate('/everyday')}>
            <div className="space-icon light-green">📊</div>
            <div className="space-details">
              <h3>Everyday</h3>
              <p>Stay on top of your finances with our tools and insights</p>
            </div>
            <span className="chevron">›</span>
          </div>

          <div className="space-card" onClick={() => navigate('/save-invest')}>
            <div className="space-icon orange">💰</div>
            <div className="space-details">
              <h3>Save & Invest</h3>
            </div>
            <span className="chevron">›</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home; 