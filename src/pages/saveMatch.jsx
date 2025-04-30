import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function SaveMatch() {
  const navigate = useNavigate();
  const [childSavings, setChildSavings] = useState(0);
  const [monthlyMatch, setMonthlyMatch] = useState(50);
  const [yearlyMatch, setYearlyMatch] = useState(100);
  const [matchHistory, setMatchHistory] = useState([]);

  useEffect(() => {
    setChildSavings(1000); // Example value
  }, []);

  const handleMonthlyMatchChange = (event) => {
    setMonthlyMatch(event.target.value);
  };

  const handleYearlyMatchChange = (event) => {
    setYearlyMatch(event.target.value);
  };

  const calculateMonthlyMatch = () => {
    return (childSavings * monthlyMatch) / 100;
  };

  const calculateYearlyMatch = () => {
    return (childSavings * yearlyMatch) / 100;
  };

  const handleManualMatch = () => {
    const newMatch = {
      date: new Date().toLocaleDateString(),
      amount: calculateMonthlyMatch(),
      type: 'monthly'
    };
    setMatchHistory([...matchHistory, newMatch]);
  };

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
          <button className="tab-button" onClick={() => navigate('/everyday')}>Everyday</button>
        </div>
      </header>

      <main className="account-summary">
        <h2>Savings Match</h2>
        
        <div className="account-card">
          <div className="account-details">
            <span className="account-name">Current Child's Savings</span>
            <span className="account-number">00-00-00 / 98765432</span>
          </div>
          <span className="account-balance">£{childSavings.toFixed(2)}</span>
        </div>

        <section className="spaces-section">
          <h2>Match Settings</h2>
          
          <div className="space-card">
            <div className="space-icon light-green">📅</div>
            <div className="space-details">
              <h3>Monthly Match</h3>
              <p>Current match: {monthlyMatch}%</p>
              <div className="match-slider">
                <input 
                  type="range" 
                  min="0" 
                  max="200" 
                  value={monthlyMatch} 
                  onChange={handleMonthlyMatchChange}
                  className="slider"
                />
                <p>Match Amount: £{calculateMonthlyMatch().toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="space-card">
            <div className="space-icon light-green">📊</div>
            <div className="space-details">
              <h3>Yearly Match</h3>
              <p>Current match: {yearlyMatch}%</p>
              <div className="match-slider">
                <input 
                  type="range" 
                  min="0" 
                  max="200" 
                  value={yearlyMatch} 
                  onChange={handleYearlyMatchChange}
                  className="slider"
                />
                <p>Match Amount: £{calculateYearlyMatch().toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="space-card">
            <div className="space-icon light-green">📝</div>
            <div className="space-details">
              <h3>Match History</h3>
              <button className="match-button" onClick={handleManualMatch}>
                Trigger Manual Match
              </button>
              <div className="match-history">
                {matchHistory.map((match, index) => (
                  <div key={index} className="match-history-item">
                    <p>Date: {match.date}</p>
                    <p>Amount: £{match.amount.toFixed(2)}</p>
                    <p>Type: {match.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SaveMatch;
