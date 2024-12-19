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
  BottomOverlayContainer,
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
    }
  }, [isVisible]);

  const [expanded, setExpanded] = useState(false);

  // Функция для переключения состояния expanded
  const toggleExpand = () => {
    setExpanded(prev => !prev);
  };

  // Функция для остановки распространения события при клике на кнопку
  const handleButtonClick = event => {
    event.stopPropagation(); // Это предотвратит передачу клика вверх к родительскому элементу
    toggleExpand(); // Закроет оверлей
  };

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
      <BottomContainer $expanded={expanded} onClick={toggleExpand} className="bottom">
        <TextLink>
          Зв’язатись
          <ArrowLink />
        </TextLink>
        {/* BottomOverlayContainer теперь будет абсолютно позиционирован */}
        <BottomOverlayContainer expanded={expanded}>
          <button onClick={handleButtonClick}>Закрыть</button>{' '}
          {/* При клике на кнопку оверлей будет закрыт */}
        </BottomOverlayContainer>
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
