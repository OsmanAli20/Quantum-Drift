import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function FamilyParent() {
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
          <button className="tab-button" onClick={() => navigate('/family')}>Family</button>
          <button className="tab-button active">Family (Child)</button>
          <button className="tab-button" onClick={() => navigate('/everyday')}>Everyday</button>
        </div>
      </header>

      <main className="account-summary">
        <h2>Family Banking</h2>

        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Family Savings</span>
            <span className="account-number">00-00-00 / 87654321</span>
          </div>
          <span className="account-balance">£10,000.00</span>
        </div>

        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Children's Account</span>
            <span className="account-number">00-00-00 / 98765432</span>
          </div>
          <span className="account-balance">£2,500.00</span>
          <button className="request-button">Request Money</button>
        </div>

        {/* Family Sharing */}
        <section className="feature-section">
          <h2>Family Sharing</h2>
          <div className="space-card green-bg">
            <div className="space-icon light-green">👨‍👩‍👧‍👦</div>
            <div className="space-details">
              <p>Share accounts and manage family finances together</p>
            </div>
          </div>
        </section>

        <section className="feature-section">
        <h2>Savings Goals</h2>

        {/* Nintendo Switch Goal */}
        <div className="space-card">
          <div className="space-icon light-green">🎮</div>
          <div className="space-details">
            <h3>Nintendo Switch Pot</h3>
            <p>£150 saved of £300</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>

        {/* Locked Savings */}
        <div className="space-card lock-card">
          <div className="space-icon light-green">🔒</div>
          <div className="space-details">
            <h3>Locked Pots</h3>
            <p>Holiday Savings: £500 (locked by parents)</p>
          </div>
        </div>
      </section>

        {/* Leaderboard */}
        <section className="feature-section">
          <h2>Leaderboard</h2>
          <div className="space-card">
            <div className="space-icon light-green">🏆</div>
            <div className="space-details">
              <ul className="leaderboard">
                <li>Sam – £1,200</li>
                <li>Jess – £950</li>
                <li>Max – £600</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Upcoming Payments */}
        <section className="feature-section">
          <h2>Upcoming Payments</h2>
          <div className="space-card">
            <div className="space-icon light-green">📅</div>
            <div className="space-details">
              <p>Nintendo Switch Pot: £20 on May 5th</p>
              <p>Holiday Pot: £30 on May 12th</p>
            </div>
          </div>
        </section>

      
      </main>
    </div>
  );
}

export default FamilyParent;
