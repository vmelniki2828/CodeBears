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
import { NavLink } from 'react-router-dom';

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

  const scrollToAnchor = id => {
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
            <SideBarListLeftItem
              onClick={() => {
                scrollToAnchor('about-us');
                onClickGood(!isOpen);
              }}
            >
              Про нас
            </SideBarListLeftItem>
            <NavLink to="/portfolio" style={{ textDecoration: 'none' }}>
              <SideBarListLeftItem>Наші проєкти</SideBarListLeftItem>
            </NavLink>
            <SideBarListLeftItem
              onClick={() => {
                scrollToAnchor('contact');
                onClickGood(!isOpen);
              }}
            >
              Контактна інформація
            </SideBarListLeftItem>
          </SideBarListLeft>
          <SideBarListRight>
            <SideBarListRightLeft>
              <NavLink to="/services/PWA" style={{ textDecoration: 'none' }}>
                <SideBarListRightLeftItems>
                  PWA <br />
                  (Progressive Web Apps)
                </SideBarListRightLeftItems>
              </NavLink>
              <NavLink to="/services/AI" style={{ textDecoration: 'none' }}>
                <SideBarListRightLeftItems>ШІ</SideBarListRightLeftItems>
              </NavLink>
              <NavLink
                to="/services/AutAndOptBisnProcPage"
                style={{ textDecoration: 'none' }}
              >
                <SideBarListRightLeftItems>
                  Автоматизація та оптимізація
                  <br /> бізнес-процесів
                </SideBarListRightLeftItems>
              </NavLink>
              <NavLink
                to="/services/ERPandCRM"
                style={{ textDecoration: 'none' }}
              >
                <SideBarListRightLeftItems>
                  ERP и CRM системи
                </SideBarListRightLeftItems>
              </NavLink>
              <NavLink
                to="/services/InternetShop"
                style={{ textDecoration: 'none' }}
              >
                <SideBarListRightLeftItems>
                  Інтернет-магазини
                </SideBarListRightLeftItems>
              </NavLink>
              {/* <SideBarListRightLeftItems>
                Корпоративні сайти
              </SideBarListRightLeftItems>
              <SideBarListRightLeftItems>
                Аудит сайтів
              </SideBarListRightLeftItems> */}
            </SideBarListRightLeft>
            <SideBarListRightRight>
              <NavLink
                to="/services/Landing"
                style={{ textDecoration: 'none' }}
              >
                <SideBarListRightRightItems>
                  Односторінкові сайти <br />
                  (landing page)
                </SideBarListRightRightItems>
              </NavLink>
              <NavLink
                to="/services/BannerAdvertising"
                style={{ textDecoration: 'none' }}
              >
                <SideBarListRightRightItems>
                  Банерна реклама на сайтах
                </SideBarListRightRightItems>
              </NavLink>
              <NavLink
                to="/services/SEOOptim"
                style={{ textDecoration: 'none' }}
              >
                <SideBarListRightRightItems>
                  Seo оптимізація{' '}
                </SideBarListRightRightItems>
              </NavLink>
              <NavLink to="/services/SMM" style={{ textDecoration: 'none' }}>
                <SideBarListRightRightItems>SMM</SideBarListRightRightItems>
              </NavLink>
              <NavLink
                to="/services/OnlinePromotion"
                style={{ textDecoration: 'none' }}
              >
                <SideBarListRightRightItems>
                  Продвижение в сети
                </SideBarListRightRightItems>
              </NavLink>
            </SideBarListRightRight>
          </SideBarListRight>
        </SideBarMenuList>
        <FixedBottomBlock>
          <FixedBottomBlockText>
            Давайте поговоримо про ваш проєкт
          </FixedBottomBlockText>
        </FixedBottomBlock>
      </SideBarContainer>
    </>
  );
};

export default SideBarMenu;
