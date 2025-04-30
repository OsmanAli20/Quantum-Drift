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
          <button className="tab-button" onClick={() => navigate('/family')}>Family</button>
          <button className="tab-button" onClick={() => navigate('/family-child')}>Family (Child)</button>
          <button className="tab-button" onClick={() => navigate('/family-grandparent')}>Family (Grandparent)</button>
          <button className="tab-button" onClick={() => navigate('/everyday')}>Everyday</button>
        </div>
      </header>
      <main className="account-summary">
        <h2>Everyday Banking</h2>
        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Quick Payments</span>
            <p>Send money to your frequent contacts</p>
          </div>
        </div>

        <div className="account-card" onClick={() => navigate('/insights')} style={{ cursor: 'pointer' }}>
          <div className="account-details">
            <span className="account-name">Spending Insights</span>
            <p>View your spending patterns and categories</p>
          </div>
        </div>

        <section className="spaces-section">
          <h2>Tools & Services</h2>
          <div className="space-card">
            <div className="space-icon light-green">📊</div>
            <div className="space-details">
              <h3>Budget Planner</h3>
              <p>Create and manage your monthly budget</p>
            </div>
            <span className="chevron">›</span>
          </div>

          <div className="space-card">
            <div className="space-icon orange">🔔</div>
            <div className="space-details">
              <h3>Payment Reminders</h3>
              <p>Never miss a payment with custom alerts</p>
            </div>
            <span className="chevron">›</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Everyday; 