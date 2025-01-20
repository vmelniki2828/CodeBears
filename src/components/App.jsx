import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Load, CustomLoader } from './App.styled';

import ScrollToTop from 'addition/ScrollToTop/ScrollToTop';
import TryPage from 'Pages/TryPage/TryPage';

const MainPage = lazy(() => import('Pages/MainPage/MainPage'));
const PortfolioPage = lazy(() => import('Pages/PortfolioPage/PortfolioPage'));
const PWAPage = lazy(() => import('Pages/ServicesPage/PWAPage/PWAPage'));
const ServicesPage = lazy(() => import('Pages/ServicesPage/ServicesPage'));
const BanersPage = lazy(() =>
  import('Pages/ServicesPage/BanersPage/BanersPage')
);
const MotionDesignPage = lazy(() =>
  import('Pages/ServicesPage/MotionDesignPage/MotionDesignPage')
);
const WebAnaliticsPage = lazy(() =>
  import('Pages/ServicesPage/WebAnaliticsPage/WebAnaliticsPage')
);
const BrandBookPage = lazy(() =>
  import('Pages/ServicesPage/BrandBookPage/BrandBookPage')
);

export const App = () => {
  return (
    <>
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
          <Route path="/services/baners" element={<BanersPage />} />
          <Route path="/services/motion" element={<MotionDesignPage />} />
          <Route path="/services/webAnalitics" element={<WebAnaliticsPage />} />
          <Route path="/services/brandBook" element={<BrandBookPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/TryPage" element={<TryPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
