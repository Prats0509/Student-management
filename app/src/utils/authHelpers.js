// src/utils/authHelpers.js
import jwt_decode from 'jwt-decode';

export const getRoleFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const decoded = jwt_decode(token);
  // The role might be in decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] or "role".
  // Check the shape of your JWT to see how the roles are stored.
  return decoded.role || decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || null;
};
