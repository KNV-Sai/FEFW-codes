import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './store/authSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h2>Welcome, {user.username} 👋</h2>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
