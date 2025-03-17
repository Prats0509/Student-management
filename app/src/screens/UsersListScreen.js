// src/screens/UsersListScreen.js
import React, { useEffect, useState } from 'react';
import { listUsers } from '../services/userService';


function UsersListScreen() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await listUsers();
        setUsers(data);
      } catch (err) {
        setError('Error fetching users. Are you logged in as an admin?');
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>All Users (Admin Only)</h2>
      {error && <p style={{ color: 'red'}}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersListScreen;
