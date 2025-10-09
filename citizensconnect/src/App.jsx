import React from 'react';
import Dashboard from './components/Dashboard';
import RecentActivity from './components/RecentActivity';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <h1>CitizensConnect</h1>
        </div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Issues</li>
            <li>Representatives</li>
            <li>Updates</li>
            <li>Profile</li>
            <li>
              <button>Login</button>
              <button>Sign Up</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Dashboard />
        <RecentActivity />
      </main>
    </div>
  );
};

export default App;
