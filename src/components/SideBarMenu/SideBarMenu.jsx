import React, { useEffect } from 'react';
import gsap from 'gsap'; // Импортируем gsap для анимации
import {
  SideBarContainer,
  SideBarMenuList,
  SideBarListLeft,
  SideBarListRight,
  SideBarListLeftItem,
  SideBarListRightLeft,
  SideBarListRightRight,
  SideBarListRightLeftItems,
  SideBarListRightRightItems,
  FixedBottomBlock,
  FixedBottomBlockText,
} from './SideBarMenu.styled'; // Ваш стиль для сайдбара
import { Link, NavLink } from 'react-router-dom';

const SideBarMenu = ({ isOpen, onClickGood }) => {
  useEffect(() => {
    if (isOpen) {
      gsap.to('.sideMenu', {
        x: 0,
        opacity: 1,
        duration: 0.4,
      });
    } else {
      gsap.to('.sideMenu', {
        x: '-100vw',
        opacity: 0,
        duration: 0.4,
      });
    }
  }, [isOpen]); // Перезапускаем анимацию, если `isOpen` изменяется

  const scrollToAnchor = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SideBarContainer className="sideMenu">
        <SideBarMenuList>
          <SideBarListLeft>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <SideBarListLeftItem>Головна</SideBarListLeftItem>
            </NavLink>
            <SideBarListLeftItem onClick={() => { scrollToAnchor('about-us'); onClickGood(!isOpen); }}>Про нас</SideBarListLeftItem>
            <NavLink to="/portfolio" style={{ textDecoration: 'none' }}>
              <SideBarListLeftItem>Наші проєкти</SideBarListLeftItem>
            </NavLink>
            <SideBarListLeftItem onClick={() => { scrollToAnchor('contact'); onClickGood(!isOpen); }}>Контактна інформація</SideBarListLeftItem>
          </SideBarListLeft>
          <SideBarListRight>
            <SideBarListRightLeft>
              <NavLink to="/services" style={{ textDecoration: 'none' }}>
                <SideBarListRightLeftItems>Послуги</SideBarListRightLeftItems>
              </NavLink>
              <SideBarListRightLeftItems>Брендинг</SideBarListRightLeftItems>
              <SideBarListRightLeftItems>Промо-сайти</SideBarListRightLeftItems>
              <SideBarListRightLeftItems>e-Commerce</SideBarListRightLeftItems>
              <SideBarListRightLeftItems>
                Мобільні додатки
              </SideBarListRightLeftItems>
              <SideBarListRightLeftItems>
                Корпоративні сайти
              </SideBarListRightLeftItems>
              <SideBarListRightLeftItems>
                Аудит сайтів
              </SideBarListRightLeftItems>
            </SideBarListRightLeft>
            <SideBarListRightRight>
              <SideBarListRightRightItems>Портфоліо</SideBarListRightRightItems>
              <SideBarListRightRightItems>Брендинг</SideBarListRightRightItems>
              <SideBarListRightRightItems>
                UX/UI дизайн
              </SideBarListRightRightItems>
              <SideBarListRightRightItems>Веб сайти</SideBarListRightRightItems>
              <SideBarListRightRightItems>
                Мобільні додатки
              </SideBarListRightRightItems>
            </SideBarListRightRight>
          </SideBarListRight>
        </SideBarMenuList>
        <FixedBottomBlock>
          <FixedBottomBlockText>Давайте поговоримо про ваш проєкт</FixedBottomBlockText>
        </FixedBottomBlock>
      </SideBarContainer >
    </>
  );
};

export default SideBarMenu;
