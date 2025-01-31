import { BurgerIcon } from 'components/Welcome/Welcome.styled';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BackArrow } from '../Services.styled';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import {
  LandingMainTitle,
  MainLandingContainer,
  PageLandingContainer,
} from './Landing.styled';

const Landing = () => {
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню
  const textRef = useRef(null);

  const onClickGood = () => {
    setSidebarSwitcher(prevState => !prevState);
  };

  useEffect(() => {
    const chars = textRef.current.textContent.split('');
    textRef.current.textContent = '';
    chars.forEach((char, index) => {
      setTimeout(() => {
        textRef.current.textContent += char;
      }, index * 70);
    });
  }, []);
  return (
    <MainLandingContainer>
      <BurgerIcon onClick={onClickGood} className="good" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackArrow />
      </NavLink>
      <SideBarMenu isOpen={sidebarSwitcher} />
      <PageLandingContainer>
        <LandingMainTitle ref={textRef}>
          Односторінкові сайти (landing page)
        </LandingMainTitle>
      </PageLandingContainer>
    </MainLandingContainer>
  );
};

export default Landing;
