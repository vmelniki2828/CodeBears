import Footer from 'components/Footer/Footer';
import Services from 'components/Services/Services';
import { Outlet } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <>
      <Services />
      <Footer />
    </>
  );
};

export default ServicesPage;
