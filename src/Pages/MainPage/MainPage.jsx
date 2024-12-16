import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AboutUs from 'components/AboutUs/AboutUs';
import Hero from 'components/Hero/Hero';
import Welcome from 'components/Welcome/Welcome';
import { Stars, Stars2, Stars3, StarsWrapper } from './MainPage.styled';
import { useGSAP } from '@gsap/react';

const MainPage = () => {
    const container = useRef();
    const { contextSafe } = useGSAP({ scope: container });
    return (
        <StarsWrapper>
            <Stars id="stars" />
            <Stars2 id="stars2" />
            <Stars3 id="stars3" />
            <Welcome />
            <Hero />
            <AboutUs />
        </StarsWrapper>
    );
};

export default MainPage;
