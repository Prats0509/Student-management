// src/screens/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/HomePage.css'; // Import CSS for styling

function HomePage() {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Student Management System</h1>
        <p>
          Welcome to the Student Management System Dashboard. Use the links below to navigate through the app.
        </p>
      </header>
      <nav className="homepage-nav">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/users">List Users (Admin only)</Link></li>
          <li><Link to="/users/create">Create User (Admin only)</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
