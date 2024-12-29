import Footer from 'components/Footer/Footer';
import Portfolio from 'components/Portfolio/Portfolio';
import { Helmet } from 'react-helmet';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My PortfolioPage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Portfolio />
      <Footer />
    </>
  );
};

export default PortfolioPage;
