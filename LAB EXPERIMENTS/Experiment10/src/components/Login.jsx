import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './store/authSlice';

export default function Login() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!name) return;
    dispatch(login({ username: name }));
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
