import { Suspense, lazy } from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import { Load } from './App.styled';
import { MutatingDots } from 'react-loader-spinner';

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
            <MutatingDots
              height="100"
              width="100"
              color="#AFFFB7"
              secondaryColor="#AFFFB7"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
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
