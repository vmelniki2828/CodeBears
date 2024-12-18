import {
  ButtonItem,
  ButtonsContainer,
  HeroContainer,
  HeroMainText,
  HeroSubText,
  MoonImg,
  StarImg,
  StartContainer,
} from './Hero.styled';
import moon from '../../image/moon.png';
import star from '../../image/Star.svg';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  useEffect(() => {
    // Регистрация плагина ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Анимация луны и звезд (не зависит от прокрутки)
    gsap.set('.moon', { y: '0' });
    gsap.to('.moon', {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: 'linear',
    });
    gsap.to('.star', {
      rotation: "+=360", // Постоянное увеличение угла вращения
      duration: 5,
      repeat: -1, // Бесконечное повторение
      ease: 'linear', // Линейное движение
    });

    gsap.to('.star2', {
      rotation: "-=360", // Постоянное уменьшение угла вращения
      duration: 5,
      repeat: -1,
      ease: 'linear',
    });

    // Анимация текста при прокрутке
    gsap.fromTo(
      '.hero-main-text',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero-main-text',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      '.hero-sub-text',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero-sub-text',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Анимация звёзд при прокрутке
    gsap.fromTo(
      '.star',
      { scale: 0, rotation: 0, opacity: 0 },
      {
        scale: 1,
        rotation: 360,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: '.star',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      '.star2',
      { scale: 0, rotation: 0, opacity: 0 },
      {
        scale: 1,
        rotation: -360,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: '.star2',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Анимация кнопок при прокрутке
    gsap.fromTo(
      '.buttons-container',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2, // Задержка между анимацией каждой кнопки
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.buttons-container',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <HeroContainer className="text-block">
      <HeroMainText className="hero-main-text">
        РОЗРОБКА / ДИЗАЙН / МАРКЕТИНГ.
      </HeroMainText>
      <StartContainer>
        <StarImg src={star} className="star" />
        <HeroSubText className="hero-sub-text">
          Тут трошки про команію, коли буде точний текст, додамо конкретніший
          візуал.
        </HeroSubText>
        <StarImg src={star} className="star2" />
      </StartContainer>
      <ButtonsContainer className="buttons-container">
        <ButtonItem>ПОРТФОЛІО</ButtonItem>
        <ButtonItem>КОНСУЛЬТАЦІЯ</ButtonItem>
        <ButtonItem>ПОСЛУГИ</ButtonItem>
      </ButtonsContainer>
      <MoonImg src={moon} className="moon" />
    </HeroContainer>
  );
};

export default Hero;
