import React, { useEffect, useState } from "react";

const AccountCard = ({ id }) => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/accounts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setAccount(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!account) return <div>No data available</div>;

  return (
    <div className="account-card">
      <div className="account-details">
        <span className="account-name">{account.name}</span>
        <span className="account-number">
          {account.sortCode} / {account.accountNumber}
        </span>
      </div>
      <span className="account-balance">£{account.balance.toFixed(2)}</span>
    </div>
  );
};

export default AccountCard;
