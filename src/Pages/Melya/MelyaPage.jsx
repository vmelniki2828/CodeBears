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
import bez_glaz from '../../image/bez_glaz.svg';
import glaza from '../../image/gla3a.svg';
import styled, { keyframes } from "styled-components";

// Стили для контейнера body
const Body = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

// Анимация вращения для текста
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Стили для текста (весь текст вращается)
const TextContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  animation: ${rotate} 15s linear infinite;
  transform-origin: 50% 50%; /* Центр контейнера для вращения */
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

// Стили для каждого символа текста
const Span = styled.span`
  color: #fff;
  position: absolute;
  font-size: 50px;
  width: 100%;
  text-align: center;
  transform-origin: center; /* Точка вращения для каждой буквы */
  transform: ${(props) => `
    rotate(${props.angle}deg) 
    translateY(-220px); /* Размещаем буквы по окружности */
  `};
`;


const MelyaPage = () => {
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const text = "CODEBEARS CODEBEARS CODEBEARS ";

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
      gsap.to('.sideMenu', { x: -190, duration: 0.5, ease: 'power2.in', opacity: 0 });
      setSidebarSwitcher(!sidebarSwitcher);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Центр экрана (или центра контейнера глаз)
      const eyeCenterX = window.innerWidth / 2;
      const eyeCenterY = window.innerHeight / 2;

      // Координаты мыши относительно центра глаз
      const mouseX = e.clientX - eyeCenterX;
      const mouseY = e.clientY - eyeCenterY;

      // Устанавливаем ограничение движения глаз
      const maxDistance = 10; // Максимальное смещение глаз в пикселях
      const distance = Math.sqrt(mouseX ** 2 + mouseY ** 2); // Длина вектора до мыши

      // Нормализуем движение, чтобы не выходить за пределы maxDistance
      const scale = Math.min(maxDistance / distance, 1);

      setOffset({
        x: mouseX * scale,
        y: mouseY * scale,
      });
    };

    // Добавляем глобальный обработчик мыши
    window.addEventListener("mousemove", handleMouseMove);

    // Удаляем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <StarsWrapper ref={container}>
        <BurgerIcon onClick={() => onClickGood()} className="good" />
        <Stars id="stars" />
        <Stars2 id="stars2" />
        <Stars3 id="stars3" />
        <Title id="title" className="face-container"
          style={{
            width: "300px",
            height: "300px",
            margin: "0 auto",
          }}>
          <img
            src={bez_glaz}
            alt="Face"
            style={{
              display: "block",
            }}
          />
          {/* Глаза */}
          <img
            src={glaza}
            alt="Eyes"
            style={{
              position: "absolute",
              transform: `translate(0, 0) translate(${offset.x}px, ${offset.y}px)`,
              transition: "transform 0.1s ease-out",
            }}
          />
          <Body style={{ position: "absolute" }}>
            <TextContainer >
              {text.split("").map((char, index) => (
                <Span key={index} angle={index * (360 / text.length)}>
                  {char}
                </Span>
              ))}
            </TextContainer>
          </Body>
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
