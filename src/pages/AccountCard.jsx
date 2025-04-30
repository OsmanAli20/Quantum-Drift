import React, { useEffect, useState } from "react";

const AccountCard = () => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this URL with your actual API endpoint
    fetch("http://127.0.0.1:3001/api/v1/account/1")
      .then((res) => res.json())
      .then((data) => {
        setAccount(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching account data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!account) {
    return <div>No account data available.</div>;
  }

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
