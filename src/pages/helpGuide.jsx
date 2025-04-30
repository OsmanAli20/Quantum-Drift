import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function HelpGuide() {
  const navigate = useNavigate();
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('7-12');

  const ageGroups = [
    { id: '7-12', label: 'Ages 7-12', icon: '👶' },
    { id: '13-15', label: 'Ages 13-15', icon: '🧒' },
    { id: '16-18', label: 'Ages 16-18', icon: '👱‍♂️' },
    { id: 'adults', label: 'Adults', icon: '👨‍💼' },
    { id: 'retirees', label: 'Retirees', icon: '👴' }
  ];

  const guides = {
    '7-12': [
      {
        title: 'What is Money?',
        type: 'video',
        duration: '5 min',
        icon: '▶️',
        description: 'Learn about coins, notes, and how money works'
      },
      {
        title: 'Pocket Money Basics',
        type: 'interactive',
        duration: '10 min',
        icon: '🎮',
        description: 'Fun game to learn about saving pocket money'
      },
      {
        title: 'Saving for Toys',
        type: 'guide',
        duration: '8 min',
        icon: '📚',
        description: 'How to save up for things you want'
      }
    ],
    '13-15': [
      {
        title: 'Bank Accounts 101',
        type: 'video',
        duration: '7 min',
        icon: '▶️',
        description: 'Understanding bank accounts and interest'
      },
      {
        title: 'Budgeting Basics',
        type: 'interactive',
        duration: '15 min',
        icon: '🎮',
        description: 'Interactive budgeting game'
      },
      {
        title: 'Smart Saving Tips',
        type: 'guide',
        duration: '10 min',
        icon: '📚',
        description: 'Tips for growing your savings'
      }
    ],
    '16-18': [
      {
        title: 'Introduction to Investing',
        type: 'video',
        duration: '10 min',
        icon: '▶️',
        description: 'Basics of stocks and investments'
      },
      {
        title: 'Financial Planning',
        type: 'interactive',
        duration: '20 min',
        icon: '🎮',
        description: 'Plan your financial future'
      },
      {
        title: 'Credit and Loans',
        type: 'guide',
        duration: '12 min',
        icon: '📚',
        description: 'Understanding credit and borrowing'
      }
    ],
    'adults': [
      {
        title: 'Advanced Investment Strategies',
        type: 'video',
        duration: '15 min',
        icon: '▶️',
        description: 'Diversification and risk management'
      },
      {
        title: 'Retirement Planning',
        type: 'interactive',
        duration: '25 min',
        icon: '🎮',
        description: 'Interactive retirement planning tool'
      },
      {
        title: 'Tax Efficiency',
        type: 'guide',
        duration: '15 min',
        icon: '📚',
        description: 'Maximizing tax benefits and allowances'
      },
      {
        title: 'Mortgage Management',
        type: 'video',
        duration: '12 min',
        icon: '▶️',
        description: 'Understanding mortgage options and refinancing'
      },
      {
        title: 'Insurance Planning',
        type: 'guide',
        duration: '10 min',
        icon: '📚',
        description: 'Protecting your assets and family'
      }
    ],
    'retirees': [
      {
        title: 'Pension Drawdown Strategies',
        type: 'video',
        duration: '12 min',
        icon: '▶️',
        description: 'Making the most of your retirement income'
      },
      {
        title: 'Estate Planning',
        type: 'interactive',
        duration: '20 min',
        icon: '🎮',
        description: 'Planning your legacy and inheritance'
      },
      {
        title: 'Tax-Efficient Withdrawals',
        type: 'guide',
        duration: '15 min',
        icon: '📚',
        description: 'Managing tax in retirement'
      },
      {
        title: 'Healthcare Costs Planning',
        type: 'video',
        duration: '10 min',
        icon: '▶️',
        description: 'Planning for long-term care and medical expenses'
      },
      {
        title: 'Inflation Protection',
        type: 'guide',
        duration: '12 min',
        icon: '📚',
        description: 'Safeguarding your purchasing power'
      }
    ]
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
        <h2>Financial Education Hub</h2>

        <div className="age-group-selector">
          {ageGroups.map(group => (
            <button
              key={group.id}
              className={`age-group-button ${selectedAgeGroup === group.id ? 'active' : ''}`}
              onClick={() => setSelectedAgeGroup(group.id)}
            >
              <span className="age-icon">{group.icon}</span>
              {group.label}
            </button>
          ))}
        </div>

        <section className="spaces-section">
          <h2>Learning Resources</h2>
          {guides[selectedAgeGroup].map((guide, index) => (
            <div key={index} className="space-card">
              <div className="space-icon light-green">{guide.icon}</div>
              <div className="space-details">
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <div className="guide-meta">
                  <span className="guide-type">{guide.type}</span>
                  <span className="guide-duration">{guide.duration}</span>
                </div>
              </div>
              <span className="chevron">›</span>
            </div>
          ))}
        </section>

        <section className="spaces-section">
          <h2>Quick Tips</h2>
          <div className="space-card green-bg">
            <div className="space-icon light-green">💡</div>
            <div className="space-details">
              <h3>Start Small</h3>
              <p>Even saving a little bit regularly can add up over time</p>
            </div>
            <span className="chevron">›</span>
          </div>
          <div className="space-card green-bg">
            <div className="space-icon light-green">🎯</div>
            <div className="space-details">
              <h3>Set Goals</h3>
              <p>Having clear goals makes saving more fun and rewarding</p>
            </div>
            <span className="chevron">›</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HelpGuide;
