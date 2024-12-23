import { BurgerIcon } from 'components/Welcome/Welcome.styled';
import {
  PWAContainer,
  PWAGreenOverlay,
  PWAImageContainer,
  PWAImagesContainer,
  PWALeftImage,
  PWAMainTitle,
  PWARightImage,
  PWAStarContainer,
  PWAStarImg,
  PWASubTItle,
  PWAText,
  PWATextOverlay,
} from './PWA.styled';
import { Form, NavLink } from 'react-router-dom';
import { BackArrow } from '../Services.styled';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import screen_one from '../../../image/screen_one.png';
import screen_two from '../../../image/screen_two.png';
import star from '../../../image/Star.svg';
import { Attach, AttachButton, ButtonGroup, Con, FormPar, FormText, FormText2, FormWrap, FormWrapText, InputLine, SendButton, TextArea } from 'components/MainForm/MainForm.styled';
import AttachIcon from '../../../image/Vector66.svg';
import axios from 'axios';

const PWA = () => {
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню

  const onClickGood = () => {
    setSidebarSwitcher(prevState => !prevState); // Переключение состояния меню
  };

  useEffect(() => {
    // Устанавливаем начальное состояние меню (спрятано)
    gsap.set('.sideMenu', { x: '-100vw' });
    gsap.to('.star', {
      rotation: '+=360', // Постоянное увеличение угла вращения
      duration: 5,
      repeat: -1, // Бесконечное повторение
      ease: 'linear', // Линейное движение
    });
  }, []);


  return (
    <PWAContainer>
      <BurgerIcon onClick={onClickGood} className="good" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackArrow />
      </NavLink>
      <SideBarMenu isOpen={sidebarSwitcher} />

      <PWAMainTitle>PIWA</PWAMainTitle>
      <PWASubTItle>PROGRESSIVE INCREDIBLE WEB APPS</PWASubTItle>

      <PWAImagesContainer>
        <PWAImageContainer isLeft>
          <>
            <PWALeftImage src={screen_one} />
            <PWAGreenOverlay />
          </>
          <PWATextOverlay>CODEBEARS</PWATextOverlay>
        </PWAImageContainer>
        <PWAImageContainer>
          <>
            <PWARightImage src={screen_two} />
            <PWAGreenOverlay />
          </>
          <PWATextOverlay>KN.MYSTRN</PWATextOverlay>
        </PWAImageContainer>
      </PWAImagesContainer>

      <PWAText>
        Progressive Web Apps (PWA) — це веб-додатки, які поєднують найкращі
        властивості вебсайтів та мобільних додатків. Вони швидко завантажуються,
        працюють навіть без підключення до Інтернету, та забезпечують зручність
        використання завдяки адаптивному дизайну. Наша компанія володіє
        глибокими знаннями у створенні PWA, завдяки чому ми здатні розробляти
        сучасні, ефективні та зручні рішення, які задовольнять потреби ваших
        користувачів і покращать їхній досвід. Ми знаємо, як використовувати
        інноваційні технології, щоб ваш бізнес отримав конкурентні переваги.
      </PWAText>
      <PWAStarContainer>
        <PWAStarImg src={star} className="star" />
      </PWAStarContainer>

    </PWAContainer>
  );
};

export default PWA;
