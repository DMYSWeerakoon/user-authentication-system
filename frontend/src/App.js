import React from 'react';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div>
      <h1>User Authentication System</h1>
      <Register />
      <hr />
      <Login />
    </div>
  );
}

export default App;
