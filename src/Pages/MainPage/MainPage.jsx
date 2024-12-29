import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AboutUs from 'components/AboutUs/AboutUs';
import Hero from 'components/Hero/Hero';
import Welcome from 'components/Welcome/Welcome';
import { Stars, Stars2, Stars3, StarsWrapper } from './MainPage.styled';
import { useGSAP } from '@gsap/react';
import WhyWe from 'components/WhyWe/WhyWe';
import Gallery from 'components/Gallery/Gallery';
import MainForm from 'components/MainForm/MainForm';
import Footer from 'components/Footer/Footer';
import { Helmet } from 'react-helmet';

const MainPage = () => {
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });
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
      <Welcome />
      <Hero />
      <AboutUs />
      <WhyWe />
      <Gallery />
      <MainForm />
      <Footer />
    </StarsWrapper>
  );
};

export default MainPage;
