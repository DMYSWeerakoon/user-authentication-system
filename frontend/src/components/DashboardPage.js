import React from 'react';
import { decodeToken } from '../utils/auth';

const DashboardPage = () => {
  const user = decodeToken();

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      <h2>Welcome, {user?.name || 'User'}! 🎉</h2>
      <p>You are now logged in to the protected dashboard.</p>
    </div>
  );
};

export default DashboardPage;
