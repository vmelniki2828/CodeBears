import {
  ArrowLink,
  GreenOverlay,
  Image,
  ImageContainer,
  MainContainer,
  TextOverlay,
} from './TwoExamplesBanners.styled';
import screen_one from '../../image/screen_one.png';
import screen_two from '../../image/screen_two.png';
import WhiteArrow from '../../image/VectorWhite.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const TwoExamplesBanners = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const leftElement = leftRef.current;
    const rightElement = rightRef.current;

    // Анимация для левого блока
    gsap.fromTo(
      leftElement,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftElement,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Анимация для правого блока
    gsap.fromTo(
      rightElement,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rightElement,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <MainContainer>
      <ImageContainer ref={leftRef} isLeft>
        <>
          <Image src={screen_one} />
          <GreenOverlay />
        </>
        <TextOverlay>
          CODEBEARS <ArrowLink src={WhiteArrow} />
        </TextOverlay>
      </ImageContainer>
      <ImageContainer ref={rightRef}>
        <>
          <Image src={screen_two} />
          <GreenOverlay />
        </>
        <TextOverlay>
          KN.MYSTRN <ArrowLink src={WhiteArrow} />
        </TextOverlay>
      </ImageContainer>
    </MainContainer>
  );
};

export default TwoExamplesBanners;
