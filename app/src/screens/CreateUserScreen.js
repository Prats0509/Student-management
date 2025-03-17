// src/screens/CreateUserScreen.js
import React, { useState } from 'react';
import { createUser } from '../services/userService';

function CreateUserScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      setError('');
      const data = await createUser(email, password);
      setMessage('User created successfully!');
    } catch (err) {
      setError('Failed to create user. Ensure you are Admin and data is valid.');
    }
  };

  return (
    <div>
      <h2>Create User (Admin)</h2>
      <form onSubmit={handleCreateUser}>
        <div>
          <label>Email:</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Create User</button>
      </form>
      {message && <p style={{ color: 'green'}}>{message}</p>}
      {error && <p style={{ color: 'red'}}>{error}</p>}
    </div>
  );
}

export default CreateUserScreen;
