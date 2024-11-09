// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cipher from './pages/Cipher';
import GetStarted from './pages/GetStarted';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/cipher" element={<Cipher />} />
      </Routes>
    </Router>
  );
}

export default App;