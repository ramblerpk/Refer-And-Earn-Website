// src/App.js
import React from 'react';
import ReferAndEarn from './ReferAndEarn';
import ReferralList from './ReferralList';
import './ReferAndEarn.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReferAndEarn />
        <ReferralList />
      </header>
    </div>
  );
}

export default App;
