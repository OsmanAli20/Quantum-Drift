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
          <button className="tab-button active">Family</button>
          <button className="tab-button" onClick={() => navigate('/family-child')}>Family (Child)</button>
          <button className="tab-button" onClick={() => navigate('/everyday')}>Everyday</button>
        </div>
      </header>
      <main className="account-summary">
        <h2>Family Banking</h2>

        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Personal Current Account</span>
            <span className="account-number">00-00-00 / 12345678</span>
          </div>
          <span className="account-balance">£2,023.00</span>
        </div>

        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Family Savings</span>
            <span className="account-number">00-00-00 / 87654321</span>
          </div>
          <span className="account-balance">£4650.00</span>
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
            <span className="account-name">Children's Current Account (A Jones)</span>
            <span className="account-number">00-00-00 / 98765432</span>
          </div>
          <span className="account-balance">£500.00</span>
        </div>

        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Children's Current Account (H Jones)</span>
            <span className="account-number">00-00-00 / 98765432</span>
          </div>
          <span className="account-balance">£130.00</span>
        </div>

        <section className="spaces-section">
          <h2>Family Features</h2>
          <div className="space-card green-bg" onClick={() => navigate('/family-sharing')} style={{ cursor: 'pointer' }}>
            <div className="space-icon light-green">👨‍👩‍👧‍👦</div>
            <div className="space-details">
              <h3>Family Sharing</h3>
              <p>Share accounts and manage family finances together</p>
            </div>
            <span className="chevron">›</span>
          </div>

          <div className="space-card" onClick={() => navigate('/saving-goals')} style={{ cursor: 'pointer' }}>
            <div className="space-icon light-green">🎯</div>
            <div className="space-details">
              <h3>Savings Goals</h3>
              <p>Track family savings and contributions</p>
            </div>
            <span className="chevron">›</span>
          </div>

          <div className="space-card" onClick={() => navigate('/save-match')} style={{ cursor: 'pointer' }}>
            <div className="space-icon light-green">💰</div>
            <div className="space-details">
              <h3>Savings Match</h3>
              <p>Match your children's savings monthly and yearly</p>
            </div>
            <span className="chevron">›</span>
          </div>
        </section>

        <section className="bottom-cards">
          <div className="card shared-pot-card">
            <h3>Learn more about money</h3>
          </div>
            
          <div className="card child-pot-card">
            <h3>Family spending insights</h3>
          </div>
        </section>

      </main>
      <div className="card space" onClick={() => navigate('/help-guide')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '40px', marginLeft: '20px', width: 'fit-content' }}>
        <span className="icon" style={{ fontSize: '24px', color: '#11b67a' }}>📚</span>
        <h3>Education Hub</h3>
      </div>
    </div>
  );
};

export default FamilyParent; 