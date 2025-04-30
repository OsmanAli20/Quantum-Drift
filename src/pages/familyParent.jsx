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
            <span className="account-name">Parent Current Account</span>
            <span className="account-number">00-00-00 / 87654321</span>
          </div>
          <span className="account-balance">£10,000.00</span>
        </div>

        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Parent Savings</span>
            <span className="account-number">00-00-00 / 98765432</span>
          </div>
          <span className="account-balance">£5,000.00</span>
        </div>

        <div className="space-card green-bg" onClick={() => navigate('/request-money')} style={{ cursor: 'pointer' }}>
          <div className="space-icon light-green">💸</div>
          <div className="space-details">
            <h3>Request Money</h3>
            <p>Request money from family members</p>
          </div>
          <span className="chevron">›</span>
        </div>

        <div className="space-card green-bg" onClick={() => navigate('/add-money')} style={{ cursor: 'pointer' }}>
          <div className="space-icon light-green">➕</div>
          <div className="space-details">
            <h3>Add Money to Savings</h3>
            <p>Transfer money to family savings</p>
          </div>
          <span className="chevron">›</span>
        </div>
        
        <h2>Children's Accounts</h2>
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

        <section className="feature-section">
          <h2>Savings Goals</h2>
          <div className="space-card" onClick={() => navigate('/saving-goals')} style={{ cursor: 'pointer' }}>
            <div className="space-icon light-green">🐬</div>
            <div className="space-details">
              <h3>Family Holiday</h3>
              <p>£2,500 saved of £5,000</p>
            </div>
            <span className="chevron">›</span>
          </div>

          <div className="space-card">
            <div className="space-icon light-green">🎁</div>
            <div className="space-details">
              <h3>Christmas Fund</h3>
              <p>£100 saved of £1,000</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>

          <div className="space-card">
            <div className="space-icon light-green">🔒</div>
            <div className="space-details">
              <h3>University Savings (Locked)</h3>
              <p>£4000 (locked for children)</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>

          <div className="space-card green-highlight" onClick={() => navigate('/save-match')} style={{ cursor: 'pointer' }}>
            <div className="space-icon light-green">💰</div>
            <div className="space-details">
              <h3>Savings Match</h3>
              <p>Match your children's savings monthly and yearly</p>
            </div>
            <span className="chevron">›</span>
          </div>
        </section>

        {/* Leaderboard */}
        <section className="feature-section">
          <h2>Leaderboard</h2>
          <div className="leaderboard-grid">
            <div className="leaderboard-card gold">
              <div className="place-icon">🥇</div>
              <div className="child-name">Sam</div>
              <div className="child-amount">£1,200</div>
            </div>
            <div className="leaderboard-card silver">
              <div className="place-icon">🥈</div>
              <div className="child-name">Jess</div>
              <div className="child-amount">£950</div>
            </div>
            <div className="leaderboard-card bronze">
              <div className="place-icon">🥉</div>
              <div className="child-name">Max</div>
              <div className="child-amount">£600</div>
            </div>
          </div>
        </section>

        {/* Upcoming Payments */}
        <section className="feature-section">
        <h2>Upcoming Payments</h2>

        <div className="payment-card">
          <div className="payment-left">
            <div className="space-icon light-green">🎮</div>
            <div className="payment-text">
              <h3>Nintendo Switch Goal</h3>
              <span className="payment-date">Due: May 5th</span>
            </div>
          </div>
          <div className="payment-right">
            <span className="payment-amount">£20</span>
          </div>
        </div>

        <div className="payment-card">
          <div className="payment-left">
            <div className="space-icon light-green">🏖️</div>
            <div className="payment-text">
              <h3>Family Holiday Goal</h3>
              <span className="payment-date">Due: May 12th</span>
            </div>
          </div>
          <div className="payment-right">
            <span className="payment-amount">£30</span>
          </div>
        </div>
      </section>

        <section className="bottom-cards">
          <div className="card shared-pot-card pink-card">
            <h3>Learn more about money</h3>
          </div>
          
          <div className="card child-pot-card purple-card">
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