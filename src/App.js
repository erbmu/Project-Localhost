import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrganizationLeaderboard from './pages/Leaderboard';
import Login from './pages/Login';
import OrganizationPage from './pages/OrganizationPage';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Login />} />
        <Route path= "/Signup" element = {<Signup />} />
        <Route path="/orgs" element={<OrganizationPage />} />
        <Route path="/leaderboard" element={<OrganizationLeaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
