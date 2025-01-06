import React from 'react';

export default function UserInfo({ user, onLogout }) {
  return (
    <div className="user-info">
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

