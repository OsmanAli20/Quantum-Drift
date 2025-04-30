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
        <h2>Family Spending Insights</h2>

        <button className="ai-insights-button" onClick={() => navigate('/ai-insights')}>
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
          <h3>Yearly Spending</h3>
          <div className="chart-container">
            {yearlySpending.map((person, index) => (
              <div key={index} className="chart-bar">
                <div className="bar-label">{person.name}</div>
                <div className="bar-wrapper">
                  <div 
                    className="bar-fill" 
                    style={{ width: `${(person.amount / Math.max(...yearlySpending.map(p => p.amount))) * 100}%` }}
                  >
                    <span className="bar-amount">£{person.amount}</span>
                  </div>
                </div>
              </div>
            ))}
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
