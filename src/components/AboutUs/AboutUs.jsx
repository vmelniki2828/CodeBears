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
  MainTextAboutUs,
  TextAboutUs,
} from './AboutUs.styled';
import ContactUsModal from 'components/ContactUsModal/ContactUsModal';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false); // Состояние видимости
  const aboutUsRef = useRef(null); // Ссылка на контейнер AboutUs
  const [modalVisible, setModalVisible] = useState(false);

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
      gsap.fromTo(
        '.bottom',
        { y: '100vw', opacity: 0 }, // Начальные значения
        { y: '0', opacity: 1, duration: 1, ease: 'power3.out' } // Конечные значения
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
      gsap.to('.bottom', {
        y: '100vw',
        opacity: 0,
        duration: 1,
        ease: 'power3.in',
      });
    }
  }, [isVisible]);
  return (
    <AboutUsConteiner id="about-us" ref={aboutUsRef}>
      <TopContainer>
        <TopLeftContainer className="top-left">ПРО НАС</TopLeftContainer>
        <TopRightContainer className="top-right">
          <MainTextAboutUs>CODEBEARS</MainTextAboutUs>
          <TextAboutUs>
            Тут трошки про команію, коли буде точний текст, додамо конкретніший
            візуал. Тут трошки про команію, коли буде точний текст,додамо
            конкретніший візуал. Тут трошки про команію, коли буде текст
            текст.Тут трошки про команію, коли буде точний текст.
          </TextAboutUs>
        </TopRightContainer>
      </TopContainer>
      <BottomContainer className="bottom">
        <TextLink onClick={() => setModalVisible(!modalVisible)}>
          Зв’язатись
          <ArrowLink />
        </TextLink>
      </BottomContainer>
      {modalVisible ? (
        <ContactUsModal setModalVisible={setModalVisible} />
      ) : (
        <></>
      )}
    </AboutUsConteiner>
  );
};

export default AboutUs;
