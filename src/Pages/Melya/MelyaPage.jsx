import { useEffect, useRef, useState } from 'react';
import {
  BurgerIcon,
  BurgerIconExit,
  Stars,
  Stars2,
  Stars3,
  StarsWrapper,
  Title,
} from './MelyaPage.styled';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Bear from '../../image/bearHero.png'

const MelyaPage = () => {
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false);

  useEffect(() => {
    // Устанавливаем начальное состояние меню (спрятано)
    gsap.set('.sideMenu', { x: -190 });
  }, []);

  const onClickGood = () => {
    // Переключение состояния меню
    if (!sidebarSwitcher) {
      // Меню открывается
      gsap.to('.sideMenu', { x: 0, duration: 0.5, ease: 'power2.out', opacity: 1 });
      setSidebarSwitcher(!sidebarSwitcher);
    } else {
      // Меню закрывается
      gsap.to('.sideMenu', { x: -190, duration: 0.5, ease: 'power2.in' , opacity: 0});
      setSidebarSwitcher(!sidebarSwitcher);
    }
  };

  return (
    <>
      <StarsWrapper ref={container}>
        <BurgerIcon onClick={() => onClickGood()} className="good" />
        <Stars id="stars" />
        <Stars2 id="stars2" />
        <Stars3 id="stars3" />
        <Title id="title">
          <img src={Bear}/>
        </Title>
        <div
          className="sideMenu"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '150px',
            height: '100vh',
            background: '#333',
            color: '#fff',
            padding: '20px',
            cursor: 'pointer',
            opacity: 0,
          }}
        >
          Side Menu
          <BurgerIconExit onClick={() => onClickGood()} />
        </div>
      </StarsWrapper>
    </>
  );
};

export default MelyaPage;
