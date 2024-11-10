// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cipher from './pages/Cipher';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/start" element={<GetStarted />} />
        <Route path="/cipher" element={<Cipher />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;