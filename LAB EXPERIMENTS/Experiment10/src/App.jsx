import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

export default function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div style={{ padding: 20 }}>
      <h1>React Redux Login Example</h1>
      {isAuthenticated ? <Dashboard /> : <Login />}
    </div>
  );
}
