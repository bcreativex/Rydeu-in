import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import HelpPage from './pages/HelpPage'
import RequestsPage from './pages/RequestsPage'

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen">

      {location.pathname !== '/requests' && <Header />}
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
