import ScrollToTop from 'addition/ScrollToTop/ScrollToTop';
import MainPage from 'Pages/MainPage/MainPage';
import PortfolioPage from 'Pages/PortfolioPage/PortfolioPage';
import PWAPage from 'Pages/ServicesPage/PWAPage/PWAPage';
import ServicesPage from 'Pages/ServicesPage/ServicesPage';
import { Link, Route, Router, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/PWA" element={<PWAPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </div>
  );
};