import styled, { keyframes } from 'styled-components';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

export const WelcomeContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const BurgerIcon = styled(HiMenu)`
  width: 30px;
  height: 30px;
  margin: 30px 0 0 30px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease; /* Плавный переход для всех изменяемых свойств */
  position: fixed;
  z-index: 999;

  &:hover {
    color: #949494;
  }
`;

export const BurgerIconExit = styled(AiOutlineClose)`
  color: #fff;
  width: 30px;
  height: 30px;
`;

// Wrapper for the stars background
// Title styles
export const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(
    -50%,
    -50%
  ); /* Центрирование по горизонтали и вертикали */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;

  img {
    width: 400px;
    height: 400px;
  }

  span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

// Стили для контейнера body
export const Body = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

// Анимация вращения для текста
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Стили для текста (весь текст вращается)
export const TextContainer = styled.div`
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
export const Span = styled.span`
  position: absolute;
  font-size: 50px;
  width: 100%;
  text-align: center;
  transform-origin: center; /* Точка вращения для каждой буквы */
  transform: ${props => `
    rotate(${props.angle}deg) 
    translateY(-320px); /* Размещаем буквы по окружности */
  `};
`;
