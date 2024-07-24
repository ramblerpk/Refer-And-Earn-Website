// src/ReferralList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReferralList = () => {
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/referrals');
        setReferrals(response.data);
      } catch (error) {
        console.error('Error fetching referral data', error);
      }
    };

    fetchReferrals();
  }, []);

  return (
    <div className="referral-list">
      <h2>Referral List</h2>
      <ul>
        {referrals.map((referral) => (
          <li key={referral._id}>{referral.email} - {referral.referralLink}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReferralList;
