import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import ActionPage from './pages/ActionPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/group/:id" element={<ActionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
