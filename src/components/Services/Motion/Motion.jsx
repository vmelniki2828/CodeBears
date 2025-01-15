import { BurgerIcon } from 'components/Welcome/Welcome.styled';
import { NavLink } from 'react-router-dom';
import { BackArrow } from '../Services.styled';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import { useState } from 'react';
import { MainMotionContainer, MotionMainTitle, MotionPageContainer } from './Motion.styled';
import TwoExamplesBanners from 'addition/TwoExamplesBanners/TwoExamplesBanners';

const Motion = () => {
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню

  const onClickGood = () => {
    setSidebarSwitcher(prevState => !prevState); // Переключение состояния меню
  };

  return (
    <MainMotionContainer>
      <BurgerIcon onClick={onClickGood} className="good" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackArrow />
      </NavLink>
      <SideBarMenu isOpen={sidebarSwitcher} />
      <MotionPageContainer>
        <MotionMainTitle>Моушн дизайн: оживіть свої ідеї</MotionMainTitle>
        <TwoExamplesBanners />
      </MotionPageContainer>
      
    </MainMotionContainer>
  );
};

export default Motion;

