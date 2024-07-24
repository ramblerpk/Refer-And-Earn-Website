// src/ReferAndEarn.js
import React, { useState } from 'react';
import axios from 'axios';
import './ReferAndEarn.css';

const ReferAndEarn = () => {
  const [email, setEmail] = useState('');
  const [referralLink, setReferralLink] = useState('https://example.com/?ref=yourReferralCode');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/referrals', {
        email,
        referralLink,
      });
      alert(`Referral email sent to ${email}`);
      setEmail('');
    } catch (error) {
      console.error('Error sending referral email', error);
      alert('There was an error sending the referral email. Please try again.');
    }
  };

  return (
    <div className="refer-and-earn">
      <h2>Refer and Earn</h2>
      <p>Invite your friends and earn rewards!</p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Enter friend's email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Send Invite</button>
      </form>
      <div className="referral-link">
        <p>Your referral link:</p>
        <input type="text" value={referralLink} readOnly />
      </div>
    </div>
  );
};

export default ReferAndEarn;
npm 