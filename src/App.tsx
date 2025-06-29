import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';

import './assets/styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
     
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Дополнительные маршруты можно добавить здесь */}
        </Routes>
     
    </Router>
  );
};

export default App;