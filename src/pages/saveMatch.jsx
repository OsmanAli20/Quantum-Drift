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
    // TODO: Replace with actual API call
    setChildSavings(1000);
  }, []);

  const handleMonthlyMatchChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setMonthlyMatch(value);
  };

  const handleYearlyMatchChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setYearlyMatch(value);
  };

  const calculateMonthlyMatch = () => {
    return (childSavings * monthlyMatch) / 100;
  };

  const calculateYearlyMatch = () => {
    return (childSavings * yearlyMatch) / 100;
  };

  const handleManualMatch = (type) => {
    const newMatch = {
      date: new Date().toLocaleDateString(),
      amount: type === 'monthly' ? calculateMonthlyMatch() : calculateYearlyMatch(),
      type: type
    };
    setMatchHistory(prevHistory => [...prevHistory, newMatch]);
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
                  aria-label="Monthly match percentage"
                />
                <p>Match Amount: £{calculateMonthlyMatch().toFixed(2)}</p>
              </div>
              <button 
                className="match-trigger-button monthly"
                onClick={() => handleManualMatch('monthly')}
                aria-label="Trigger monthly match"
              >
                Trigger Monthly Match
              </button>
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
                  aria-label="Yearly match percentage"
                />
                <p>Match Amount: £{calculateYearlyMatch().toFixed(2)}</p>
              </div>
              <button 
                className="match-trigger-button yearly"
                onClick={() => handleManualMatch('yearly')}
                aria-label="Trigger yearly match"
              >
                Trigger Yearly Match
              </button>
            </div>
          </div>

          <div className="space-card">
            <div className="space-icon light-green">📝</div>
            <div className="space-details">
              <h3>Match History</h3>
              <div className="match-history">
                {matchHistory.length > 0 ? (
                  matchHistory.map((match, index) => (
                    <div key={index} className="match-history-item">
                      <p>Date: {match.date}</p>
                      <p>Amount: £{match.amount.toFixed(2)}</p>
                      <p>Type: {match.type === 'monthly' ? 'Monthly Match' : 'Yearly Match'}</p>
                    </div>
                  ))
                ) : (
                  <p className="no-history">No match history yet</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SaveMatch;
