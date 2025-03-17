// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import LoginScreen from './screens/LoginScreen';
import UsersListScreen from './screens/UsersListScreen';
import CreateUserScreen from './screens/CreateUserScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/users" element={<UsersListScreen />} />
        <Route path="/users/create" element={<CreateUserScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
