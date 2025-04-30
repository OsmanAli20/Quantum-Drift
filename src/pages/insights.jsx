import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Insights() {
  const navigate = useNavigate();

  const monthlySpending = [
    { name: 'Alex', amount: 1200 },
    { name: 'Sarah', amount: 800 },
    { name: 'Tom', amount: 600 },
    { name: 'Emma', amount: 400 }
  ];

  const yearlySpending = [
    { name: 'Alex', amount: 14400 },
    { name: 'Sarah', amount: 9600 },
    { name: 'Tom', amount: 7200 },
    { name: 'Emma', amount: 4800 }
  ];

  const aiSuggestions = [
    "Consider setting up automatic transfers to savings when you receive your salary",
    "Review your monthly subscriptions - you might find some you no longer use",
    "Try the 50/30/20 rule: 50% needs, 30% wants, 20% savings",
    "Set specific savings goals to stay motivated"
  ];

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <button className="back-button" onClick={() => navigate(-1)}>←</button>
          <h2>Family Spending Insights</h2>
        </div>

        <button className="generate-insights-button" onClick={() => navigate('/ai-insights')}>
          <span className="sparkle-icon">✨</span>
          Generate AI Insights
        </button>

        <section className="spaces-section">
          <h3>Monthly Spending</h3>
          <div className="chart-container">
            {monthlySpending.map((person, index) => (
              <div key={index} className="chart-bar">
                <div className="bar-label">{person.name}</div>
                <div className="bar-wrapper">
                  <div 
                    className="bar-fill" 
                    style={{ width: `${(person.amount / Math.max(...monthlySpending.map(p => p.amount))) * 100}%` }}
                  >
                    <span className="bar-amount">£{person.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="spaces-section">
          <h3>Spending by Category</h3>
          <div className="category-spending">
            <div className="category-card">
              <div className="space-icon light-green">🍽️</div>
              <div className="category-details">
                <h4>Food</h4>
                <p>£1,200 this month</p>
              </div>
            </div>
            <div className="category-card">
              <div className="space-icon light-green">🚌</div>
              <div className="category-details">
                <h4>Transport</h4>
                <p>£650 this month</p>
              </div>
            </div>
            <div className="category-card">
              <div className="space-icon light-green">🎬</div>
              <div className="category-details">
                <h4>Entertainment</h4>
                <p>£400 this month</p>
              </div>
            </div>
            <div className="category-card">
              <div className="space-icon light-green">🏠</div>
              <div className="category-details">
                <h4>Housing</h4>
                <p>£2,000 this month</p>
              </div>
            </div>
          </div>
        </section>

        <section className="spaces-section">
        <h3>Top Merchants</h3>
        <div className="top-merchants">
          <div className="merchant-card">
            <div className="merchant-icon">🛒</div>
            <div className="merchant-details">
              <h4>Tesco</h4>
              <p>£450 spent</p>
            </div>
          </div>
          <div className="merchant-card">
            <div className="merchant-icon">📦</div>
            <div className="merchant-details">
              <h4>Amazon</h4>
              <p>£320 spent</p>
            </div>
          </div>
          <div className="merchant-card">
            <div className="merchant-icon">☕</div>
            <div className="merchant-details">
              <h4>Starbucks</h4>
              <p>£180 spent</p>
            </div>
          </div>
        </div>
      </section>



        <section className="spaces-section">
          <h3>AI Savings Tips</h3>
          <div className="ai-suggestions">
            {aiSuggestions.map((suggestion, index) => (
              <div key={index} className="space-card">
                <div className="space-icon light-green">💡</div>
                <div className="space-details">
                  <p style={{ color: '#333' }}>{suggestion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Insights;
