import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
