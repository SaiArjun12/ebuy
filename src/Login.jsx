// Login.js
import React, { useState } from 'react';
import './Login.css'; // Import your styling here

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Perform login logic here
    // For simplicity, we'll just log the credentials for now
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset form and error state
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
