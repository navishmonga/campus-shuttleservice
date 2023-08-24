import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Schedule from './components/Schedule';
import Tracking from './components/Tracking';
import Booking from './components/Booking';
import Notifications from './components/Notifications';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Campus Shuttle App</h1>
        </header>
        <nav className="navigation">
          <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
          <NavLink to="/schedule" className="nav-link" activeClassName="active">Schedule</NavLink>
          <NavLink to="/tracking" className="nav-link" activeClassName="active">Tracking</NavLink>
          <NavLink to="/booking" className="nav-link" activeClassName="active">Booking</NavLink>
          <NavLink to="/notifications" className="nav-link" activeClassName="active">Notifications</NavLink>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/" element={<h2>Welcome to Campus Shuttle App</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
