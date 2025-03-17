// src/services/userService.js
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// Interceptor to include token if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Create a user (Admin only)
export const createUser = async (email, password) => {
  // POST /api/user/create
  const response = await API.post('/api/user/create', { email, password });
  return response.data; 
};

// List all users (Admin only)
export const listUsers = async () => {
  // GET /api/user/list
  const response = await API.get('/api/user/list');
  return response.data; // Array of users
};

// Edit a user by ID (Admin only)
export const editUser = async (id, email, password) => {
  // PUT /api/user/edit/{id}
  const response = await API.put(`/api/user/edit/${id}`, { email, password });
  return response.data;
};

// Delete a user by ID (Admin only)
export const deleteUser = async (id) => {
  // DELETE /api/user/delete/{id}
  const response = await API.delete(`/api/user/delete/${id}`);
  return response.data;
};

// Get user by ID (Admin or the user itself)
export const getUserById = async (id) => {
  // GET /api/user/{id}
  const response = await API.get(`/api/user/${id}`);
  return response.data; // { id, email }
};
