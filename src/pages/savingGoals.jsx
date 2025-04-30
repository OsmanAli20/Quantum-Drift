import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function SavingGoals() {
  const navigate = useNavigate();
  
  // Dummy data for family members
  const [familyMembers] = useState([
    { id: 1, name: 'Alex', monthlySavings: 500, yearlySavings: 6000, contributions: 1200 },
    { id: 2, name: 'Sarah', monthlySavings: 450, yearlySavings: 5400, contributions: 1000 },
    { id: 3, name: 'James', monthlySavings: 300, yearlySavings: 3600, contributions: 800 },
    { id: 4, name: 'Emma', monthlySavings: 400, yearlySavings: 4800, contributions: 900 },
    { id: 5, name: 'Lucas', monthlySavings: 350, yearlySavings: 4200, contributions: 750 }
  ]);

  const [familyPot] = useState(4650); // Total contributions
  const [selectedPeriod, setSelectedPeriod] = useState('monthly'); // 'monthly' or 'yearly'

  const getSortedMembers = (period) => {
    return [...familyMembers].sort((a, b) => b[`${period}Savings`] - a[`${period}Savings`]);
  };

  const getTopContributors = () => {
    return [...familyMembers].sort((a, b) => b.contributions - a.contributions);
  };

  const getMedalIcon = (position) => {
    switch(position) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return '';
    }
  };

  return (
    <div className="bank-app">
      <header className="app-header">
        <div className="header-icons">
          <button className="back-button" onClick={() => navigate(-1)}>←</button>
          <span className="greeting">Hi Alex</span>
          <div className="right-icons">
            <span className="icon">❓</span>
            <span className="icon">👥</span>
          </div>
        </div>
        <div className="tab-bar">
          <button className="tab-button" onClick={() => navigate('/')}>Summary</button>
          <button className="tab-button" onClick={() => navigate('/family')}>Family</button>
          <button className="tab-button" onClick={() => navigate('/everyday')}>Everyday</button>
        </div>
      </header>

      <main className="account-summary">
        <h2>Family Savings Goals</h2>

        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Family Savings Pot</span>
            <span className="account-number">Total Contributions</span>
          </div>
          <span className="account-balance">£{familyPot.toFixed(2)}</span>
        </div>

        <section className="spaces-section">
          <h2>Top Contributors</h2>
          {getTopContributors().map((member, index) => (
            <div key={member.id} className="space-card">
              <div className="space-icon light-green">{index + 1}</div>
              <div className="space-details">
                <h3>{member.name}</h3>
                <p>Contributed: £{member.contributions.toFixed(2)}</p>
              </div>
              <span className="chevron">›</span>
            </div>
          ))}
        </section>

        <section className="spaces-section">
          <h2>{selectedPeriod === 'monthly' ? 'Monthly' : 'Yearly'} Leaderboard</h2>
          <div className="period-selector">
            <button 
              className={`tab-button ${selectedPeriod === 'monthly' ? 'active' : ''}`}
              onClick={() => setSelectedPeriod('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`tab-button ${selectedPeriod === 'yearly' ? 'active' : ''}`}
              onClick={() => setSelectedPeriod('yearly')}
            >
              Yearly
            </button>
          </div>
          {getSortedMembers(selectedPeriod).map((member, index) => (
            <div key={member.id} className="space-card">
              <div className="space-icon light-green">
                {getMedalIcon(index + 1) || (index + 1)}
              </div>
              <div className="space-details">
                <h3>{member.name}</h3>
                <p>Saved: £{member[`${selectedPeriod}Savings`].toFixed(2)}</p>
              </div>
              <span className="chevron">›</span>
            </div>
          ))}
        </section>

        <section className="spaces-section">
          <h2>Savings Progress</h2>
          {familyMembers.map(member => (
            <div key={member.id} className="space-card">
              <div className="space-icon light-green">📈</div>
              <div className="space-details">
                <h3>{member.name}</h3>
                <p>{selectedPeriod === 'monthly' ? 'Monthly' : 'Yearly'} Savings: £{member[`${selectedPeriod}Savings`].toFixed(2)}</p>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{
                      width: `${(member[`${selectedPeriod}Savings`] / 
                        Math.max(...familyMembers.map(m => m[`${selectedPeriod}Savings`])) * 100)}%`
                    }}
                  />
                </div>
              </div>
              <span className="chevron">›</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default SavingGoals;
