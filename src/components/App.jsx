import { useState, useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import { Load,CustomLoader } from './App.styled';


import ScrollToTop from 'addition/ScrollToTop/ScrollToTop';

const MainPage = lazy(() => import('Pages/MainPage/MainPage'));
const PortfolioPage = lazy(() => import('Pages/PortfolioPage/PortfolioPage'));
const PWAPage = lazy(() => import('Pages/ServicesPage/PWAPage/PWAPage'));
const ServicesPage = lazy(() => import('Pages/ServicesPage/ServicesPage'));

export const App = () => {

  return (
    <div>
      <Suspense
        fallback={
          <Load>
          <CustomLoader />
          </Load>
        }
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/PWA" element={<PWAPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
