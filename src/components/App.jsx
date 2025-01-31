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
const AIPage = lazy(() => import('Pages/ServicesPage/AIPage/AIPage'));
const AutAndOptBisnProcPage = lazy(() =>
  import('Pages/ServicesPage/AutAndOptBisnProcPage/AutAndOptBisnProcPage')
);
const ERPandCRMPage = lazy(() =>
  import('Pages/ServicesPage/ERPandCRMPage/ERPandCRMPage')
);
const InternetShopPage = lazy(() =>
  import('Pages/ServicesPage/InternetShopPage/InternetShopPage')
);
const LandingPage = lazy(() =>
  import('Pages/ServicesPage/LandingPage/LandingPage')
);
const BannerAdvertisingPage = lazy(() =>
  import('Pages/ServicesPage/BannerAdvertisingPage/BannerAdvertisingPage')
);
const SEOOptimPage = lazy(() =>
  import('Pages/ServicesPage/SEOOptimPage/SEOOptimPage')
);
const SMMPage = lazy(() => import('Pages/ServicesPage/SMMPage/SMMPage'));
const OnlinePromotionPage = lazy(() =>
  import('Pages/ServicesPage/OnlinePromotionPage/OnlinePromotionPage')
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
          <Route path="/services/AI" element={<AIPage />} />
          <Route path="/services/ERPandCRM" element={<ERPandCRMPage />} />
          <Route path="/services/InternetShop" element={<InternetShopPage />} />
          <Route path="/services/Landing" element={<LandingPage />} />
          <Route path="/services/SEOOptim" element={<SEOOptimPage />} />
          <Route path="/services/SMM" element={<SMMPage />} />
          <Route
            path="/services/OnlinePromotion"
            element={<OnlinePromotionPage />}
          />
          <Route
            path="/services/BannerAdvertising"
            element={<BannerAdvertisingPage />}
          />
          <Route
            path="/services/AutAndOptBisnProcPage"
            element={<AutAndOptBisnProcPage />}
          />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/TryPage" element={<TryPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
