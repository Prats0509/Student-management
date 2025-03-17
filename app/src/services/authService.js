// src/services/authService.js
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// Interceptor to include token in headers (if token is available)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // or use cookies/context if you prefer
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = async (email, password) => {
  // Endpoint: POST /auth/register
  const response = await API.post('/auth/register', { email, password });
  return response.data; // { message: 'User registred successfully' }
};

export const registerAdmin = async (email, password) => {
  // Endpoint: POST /auth/register-admin
  const response = await API.post('/auth/register-admin', { email, password });
  return response.data; // { message: 'Admin registered successfully' }
};

export const loginUser = async (email, password) => {
  // Endpoint: POST /auth/login
  const response = await API.post('/auth/login', { email, password });
  // { token: '...' }
  if (response.data?.token) {
    // Save token (example in localStorage)
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem('token');
};

// Optional: check if user is logged in
export const isLoggedIn = () => {
  return !!localStorage.getItem('token');
};
