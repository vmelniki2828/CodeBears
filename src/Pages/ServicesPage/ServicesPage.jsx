import Footer from 'components/Footer/Footer';
import Services from 'components/Services/Services';
import { Helmet } from 'react-helmet';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My ServicesPage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Services />
      <Footer />
    </>
  );
};

export default ServicesPage;
