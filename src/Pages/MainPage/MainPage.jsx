import AboutUs from 'components/AboutUs/AboutUs';
import Hero from 'components/Hero/Hero';
import Welcome from 'components/Welcome/Welcome';
import {
  MainConteiner,
  MovingStars,
  MovingStars2,
  MovingStars3,
  Stars,
  Stars2,
  Stars3,
  StarsWrapper,
  StaticStars,
  StaticStars2,
  StaticStars3,
} from './MainPage.styled';
import WhyWe from 'components/WhyWe/WhyWe';
import Gallery from 'components/Gallery/Gallery';
import MainForm from 'components/MainForm/MainForm';
import Footer from 'components/Footer/Footer';
import { Helmet } from 'react-helmet';

const MainPage = () => {
  return (
    <StarsWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My MainPage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Stars id="stars" />
      <Stars2 id="stars2" />
      <Stars3 id="stars3" />

      {/* Статичные звезды */}
      {/* <StaticStars />
      <StaticStars2 /> */}

      {/* Динамичные звезды */}
      <MovingStars />
      <MovingStars2 />
      <MovingStars3 />
      <MainConteiner>
        <Welcome />
        <Hero />
        <AboutUs />
        <WhyWe />
        <Gallery />
        <MainForm />
      </MainConteiner>
      <Footer />
    </StarsWrapper>
  );
};

export default MainPage;
