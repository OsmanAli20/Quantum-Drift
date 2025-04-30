import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function FamilyGrandParent() {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(true);

  const handleSendMoney = () => {
    navigate('/send-money');
    setShowNotification(false);
  };

  return (
    <div className="bank-app">
      {showNotification && (
        <>
          <div className="notification-overlay" onClick={() => setShowNotification(false)} />
          <div className="notification-popup">
            <button className="notification-close" onClick={() => setShowNotification(false)}>×</button>
            <div className="notification-icon">🎁</div>
            <div className="notification-content">
              <div className="notification-title">Birthday Reminder!</div>
              <div className="notification-message">
                It's Nick's birthday today! Would you like to send some birthday money?
              </div>
              <button className="notification-action" onClick={handleSendMoney}>
                Send Birthday Money
              </button>
            </div>
          </div>
        </>
      )}

      <header className="app-header">
        <div className="header-icons">
          <span className="icon">✉️</span>
          <span className="greeting">Hi Margaret</span>
          <div className="right-icons">
            <span className="icon">❓</span>
            <span className="icon">👥</span>
          </div>
        </div>
        <div className="tab-bar">
          <button className="tab-button" onClick={() => navigate('/')}>Summary</button>
          <button className="tab-button" onClick={() => navigate('/family')}>Family</button>
          <button className="tab-button" onClick={() => navigate('/family-child')}>Family (Child)</button>
          <button className="tab-button active" onClick={() => navigate('/family-grandparent')}>Family (Grandparent)</button>
          <button className="tab-button" onClick={() => navigate('/everyday')}>Everyday</button>
        </div>
      </header>

      <main className="account-summary">
        <h2>Family Banking</h2>
        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Grandparent's Current Account</span>
            <span className="account-number">00-00-00 / 87654321</span>
          </div>
          <span className="account-balance">£15,000.00</span>
        </div>

        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Grandchildren's Trust Fund</span>
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

        <section className="feature-section">
          <h2>Savings Goals</h2>

          <div className="space-card" onClick={() => navigate('/saving-goals-grandparent')} style={{ cursor: 'pointer' }}>
            <div className="space-icon light-green">🚢</div>
            <div className="space-details">
              <h3>Mediterranean Cruise</h3>
              <p>£2,500 saved of £5,000</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>

          <div className="space-card">
            <div className="space-icon light-green">🎁</div>
            <div className="space-details">
              <h3>Grandchildren's Christmas Fund</h3>
              <p>£800 saved of £1,000</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>

          <div className="space-card">
            <div className="space-icon light-green">🏠</div>
            <div className="space-details">
              <h3>Home Renovation</h3>
              <p>£3,000 saved of £10,000</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '30%' }}></div>
              </div>
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

      <div className="card child-pot-card purple-card">
        <div className="card-icon-wrapper">
          <div className="card-icon">📊</div>
        </div>
        <h3>Family spending insights</h3>
      </div>
    </div>
        </section>

        <section className="feature-section">
          <h2>Family Leaderboard</h2>
          <div className="leaderboard-grid">
            <div className="leaderboard-card gold">
              <div className="place-icon">🥇</div>
              <div className="child-name">Sarah</div>
              <div className="child-amount">£2,500</div>
            </div>
            <div className="leaderboard-card silver">
              <div className="place-icon">🥈</div>
              <div className="child-name">Tom</div>
              <div className="child-amount">£1,800</div>
            </div>
            <div className="leaderboard-card bronze">
              <div className="place-icon">🥉</div>
              <div className="child-name">Emma</div>
              <div className="child-amount">£1,200</div>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <h2>Upcoming Payments</h2>
          <div className="payment-card">
            <div className="payment-left">
              <div className="space-icon light-green">🚢</div>
              <div className="payment-text">
                <h3>Mediterranean Cruise</h3>
                <span className="payment-date">Due: June 1st</span>
              </div>
            </div>
            <div className="payment-right">
              <span className="payment-amount">£200</span>
            </div>
          </div>

          <div className="payment-card">
            <div className="payment-left">
              <div className="space-icon light-green">🎁</div>
              <div className="payment-text">
                <h3>Christmas Fund</h3>
                <span className="payment-date">Due: June 15th</span>
              </div>
            </div>
            <div className="payment-right">
              <span className="payment-amount">£100</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FamilyGrandParent;
