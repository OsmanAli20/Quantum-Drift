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
          <button className="tab-button active" onClick={() => navigate('/family-child')}>Family (Child)</button>
          <button className="tab-button" onClick={() => navigate('/family-grandparent')}>Family (Grandparent)</button>
          <button className="tab-button" onClick={() => navigate('/everyday')}>Everyday</button>
        </div>
      </header>

      <main className="account-summary">
        <h2>Family Banking</h2>
        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Children's Current Account (A Jones)</span>
            <span className="account-number">00-00-00 / 98765432</span>
          </div>
          <span className="account-balance">£500.00</span>
        </div>

        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Junior ISA (A Jones)</span>
            <span className="account-number">00-00-00 / 98765432</span>
          </div>
          <span className="account-balance">£1,500</span>
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

        <section className="feature-section">
        <h2>Savings Goals</h2>

        <div className="space-card" onClick={() => navigate('/saving-goals-child')} style={{ cursor: 'pointer' }}>
            <div className="space-icon light-green">🎯</div>
            <div className="space-details">
              <h3>Family Holiday Savings Goal</h3>
              <p>Track family savings and contributions</p>
            </div>
            <span className="chevron">›</span>
          </div>

        {/* Nintendo Switch Goal */}
        <div className="space-card">
          <div className="space-icon light-green">🎮</div>
          <div className="space-details">
            <h3>Nintendo Switch Saving Goal</h3>
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
            <h3>University Savings (Locked)</h3>
            <p> £4000 (locked by parents)</p>
          </div>
        </div>
      </section>

      <section className="bottom-cards">
      <div className="cards-container">
      <div className="card shared-pot-card pink-card" onClick={() => navigate('/help-guide')}>
        <div className="card-icon-wrapper" >
          <div className="card-icon">📚</div>
        </div>
        <h3>Education Hub</h3>
      </div>

      <div className="card child-pot-card purple-card" onClick={() => navigate('/insights')}>
        <div className="card-icon-wrapper">
          <div className="card-icon">📊</div>
        </div>
        <h3>Family spending insights</h3>
      </div>
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
      </main>
    </div>
  );
}

export default FamilyParent;
