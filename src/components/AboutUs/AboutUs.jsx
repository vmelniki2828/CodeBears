import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import {
  AboutUsConteiner,
  TopContainer,
  BottomContainer,
  TopLeftContainer,
  TopRightContainer,
  TextLink,
  ArrowLink,
} from './AboutUs.styled';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false); // Состояние видимости
  const aboutUsRef = useRef(null); // Ссылка на контейнер AboutUs

  // Используем Intersection Observer для отслеживания видимости компонента
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Когда компонент виден
        } else {
          setIsVisible(false); // Когда компонент выходит из области видимости
        }
      },
      { threshold: 0.5 } // Срабатывает, когда 50% компонента видны
    );

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current); // Начинаем наблюдение
    }

    return () => {
      if (aboutUsRef.current) {
        observer.unobserve(aboutUsRef.current); // Останавливаем наблюдение при удалении компонента
      }
    };
  }, []);

  // Эффект для запуска анимации после того, как компонент стал видимым
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        '.top-left',
        { x: '-100vw', opacity: 0 }, // Начальные значения
        { x: '0', opacity: 1, duration: 1, ease: 'power3.out' } // Конечные значения
      );
      gsap.fromTo(
        '.top-right',
        { x: '100vw', opacity: 0 }, // Начальные значения
        { x: '0', opacity: 1, duration: 1, ease: 'power3.out' } // Конечные значения
      );
    } else {
      gsap.to('.top-left', {
        x: '-100vw',
        opacity: 0,
        duration: 1,
        ease: 'power3.in',
      });
      gsap.to('.top-right', {
        x: '100vw',
        opacity: 0,
        duration: 1,
        ease: 'power3.in',
      });
    }
  }, [isVisible]); // Запускаем анимацию каждый раз, когда компонент виден

  return (
    <AboutUsConteiner id="about-us" ref={aboutUsRef}>
      <TopContainer>
        <TopLeftContainer className="top-left">ПРО НАС</TopLeftContainer>
        <TopRightContainer className="top-right">asdd</TopRightContainer>
      </TopContainer>
      <BottomContainer>
        <TextLink>
          Зв’язатись
          <ArrowLink />
        </TextLink>
      </BottomContainer>
    </AboutUsConteiner>
  );
};

export default AboutUs;
