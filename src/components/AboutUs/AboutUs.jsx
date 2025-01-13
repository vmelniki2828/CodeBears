import {
  AboutUsBigContainer,
  AboutUsMainContainer,
  AboutUsSmallContainer,
  AboutUsSubContainer,
} from './AboutUs.styled';

const AboutUs = () => {
  return (
    <AboutUsMainContainer>
      <AboutUsSubContainer>
        <AboutUsBigContainer>dsada</AboutUsBigContainer>
        <AboutUsSmallContainer>dsada</AboutUsSmallContainer>
      </AboutUsSubContainer>
      <AboutUsSubContainer>
        <AboutUsSmallContainer>dsada</AboutUsSmallContainer>
        <AboutUsBigContainer>dsada</AboutUsBigContainer>
      </AboutUsSubContainer>
    </AboutUsMainContainer>
  );
};

export default AboutUs;

// import { useEffect, useState, useRef } from 'react';
// import gsap from 'gsap';
// import {
//   AboutUsConteiner,
//   TopContainer,
//   BottomContainer,
//   TopLeftContainer,
//   TopRightContainer,
//   TextLink,
//   ArrowLink,
//   MainTextAboutUs,
//   TextAboutUs,
//   BottomOverlayContainer,
// } from './AboutUs.styled';
// import ContactUsModal from 'components/ContactUsModal/ContactUsModal';
// import Arrow from '../../image/Vector64.svg'
// const [isVisible, setIsVisible] = useState(false); // Состояние видимости
// const aboutUsRef = useRef(null); // Ссылка на контейнер AboutUs
// const [expanded, setExpanded] = useState(false); // Состояние оверлея

// console.log(expanded);

// // Используем Intersection Observer для отслеживания видимости компонента
// useEffect(() => {
//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       if (entry.isIntersecting) {
//         setIsVisible(true); // Когда компонент виден
//       }
//     },
//     { threshold: 0.5 } // Срабатывает, когда 50% компонента видны
//   );

//   if (aboutUsRef.current) {
//     observer.observe(aboutUsRef.current); // Начинаем наблюдение
//   }

//   return () => {
//     if (aboutUsRef.current) {
//       observer.unobserve(aboutUsRef.current); // Останавливаем наблюдение при удалении компонента
//     }
//   };
// }, []);

// // Эффект для запуска анимации после того, как компонент стал видимым
// useEffect(() => {
//   if (isVisible) {
//     gsap.fromTo(
//       '.top-left',
//       { x: '-100vw', opacity: 0 }, // Начальные значения
//       { x: '0', opacity: 1, duration: 1, ease: 'power3.out' } // Конечные значения
//     );
//     gsap.fromTo(
//       '.top-right',
//       { x: '100vw', opacity: 0 }, // Начальные значения
//       { x: '0', opacity: 1, duration: 1, ease: 'power3.out' } // Конечные значения
//     );
//     gsap.fromTo(
//       '.bottom',
//       { opacity: 0 }, // Начальные значения
//       { opacity: 1, duration: 1, ease: 'power3.out' } // Конечные значения
//     );
//   }
// }, [isVisible]);

// // Функция для открытия/закрытия оверлея
// const toggleExpand = () => {
//   setExpanded(prev => !prev);
// };

// // Открытие оверлея по клику на блок "Зв’язатись"
// const handleClickLink = () => {
//   setExpanded(true); // Открываем оверлей
// };

// // Закрытие оверлея по клику на кнопку "Закрыть"
// const handleButtonClick = event => {
//   event.stopPropagation(); // Останавливаем всплытие события
//   setExpanded(false); // Закрываем оверлей
// };

// return (
//   <AboutUsConteiner id="about-us" ref={aboutUsRef}>
//     <TopContainer>
//       <TopLeftContainer className="top-left">ПРО НАС</TopLeftContainer>
//       <TopRightContainer className="top-right">
//         <MainTextAboutUs>CODEBEARS</MainTextAboutUs>
//         <TextAboutUs>
//           Тут трошки про команію, коли буде точний текст, додамо конкретніший
//           візуал. Тут трошки про команію, коли буде точний текст,додамо
//           конкретніший візуал. Тут трошки про команію, коли буде текст
//           текст.Тут трошки про команію, коли буде точний текст.
//         </TextAboutUs>
//       </TopRightContainer>
//     </TopContainer>
//     <BottomContainer onClick={handleClickLink} className="bottom">
//       <TextLink>
//         Зв’язатись
//         <ArrowLink src={Arrow} />
//       </TextLink>
//       <BottomOverlayContainer expanded={expanded}>
//         <ContactUsModal handleButtonClick={handleButtonClick} />
//       </BottomOverlayContainer>
//     </BottomContainer>
//   </AboutUsConteiner>
// );
