import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;