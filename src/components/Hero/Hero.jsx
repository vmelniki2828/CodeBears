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

const Hero = () => {
  useEffect(() => {
    // Устанавливаем начальное состояние меню (спрятано)
    gsap.set('.moon', { y: '0' });
    gsap.to('.moon', {
      rotation: 360,
      duration: 30, // Длительность анимации в секундах
      repeat: -1, // Бесконечное повторение анимации
      ease: 'linear', // Тип анимации (линейное движение)
    });
    gsap.to('.star', {
      rotation: 360,
      duration: 5, // Длительность анимации в секундах
      repeat: -1, // Бесконечное повторение анимации
      ease: 'linear', // Тип анимации (линейное движение)
    });
    gsap.to('.star2', {
      rotation: -360,
      duration: 5, // Длительность анимации в секундах
      repeat: -1, // Бесконечное повторение анимации
      ease: 'linear', // Тип анимации (линейное движение)
    });
  }, []);

  return (
    <HeroContainer className="text-block">
      <HeroMainText>РОЗРОБКА / ДИЗАЙН / МАРКЕТИНГ.</HeroMainText>
      <StartContainer>
        <StarImg src={star} className="star" />
        <HeroSubText>
          Тут трошки про команію, коли буде точний текст, додамо конкретніший
          візуал.
        </HeroSubText>
        <StarImg src={star} className="star2" />
      </StartContainer>
      <ButtonsContainer>
        <ButtonItem>ПОРТФОЛІО</ButtonItem>
        <ButtonItem>КОНСУЛЬТАЦІЯ</ButtonItem>
        <ButtonItem>ПОСЛУГИ</ButtonItem>
      </ButtonsContainer>
      <MoonImg src={moon} className="moon" />
    </HeroContainer>
  );
};

export default Hero;
