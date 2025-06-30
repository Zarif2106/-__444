
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../src/components/Layout/Layout';
import HomePage from '../src/pages/HomePage/HomePage';
import CardsPage from '../src/pages/CardsPage/CardsPage';
import NotFoundPage from '../src/pages/NotFoundPage/NotFoundPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/PortalPraducs" element={<Layout><CardsPage /></Layout>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;