import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';
import RequestsPage from './pages/RequestsPage';

function App() {
  return (
    <div className="max-h-screen">
      {/* Removed Header */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/requests" element={<RequestsPage />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
