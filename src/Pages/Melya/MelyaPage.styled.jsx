import styled, { keyframes } from 'styled-components';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

// Animation for stars
const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

// Generate multiple box shadows
const multipleBoxShadow = n => {
  const width = window.innerWidth;

  const shadows = Array.from({ length: n }, () => {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * width);
    return `${x}px ${y}px #FFF`;
  });
  return shadows.join(', ');
};

// Shadow variables
const shadowsSmall = multipleBoxShadow(700);
const shadowsMedium = multipleBoxShadow(200);
const shadowsBig = multipleBoxShadow(100);

export const BurgerIcon = styled(HiMenu)`
  width: 30px;
  height: 30px;
  margin: 30px 0 0 30px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease; /* Плавный переход для всех изменяемых свойств */
  position: relative;
  z-index: 11;

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
export const StarsWrapper = styled.div`
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #0f1a26 0%, #050608 100%);
  overflow: hidden;
  position: relative;
`;

// Stars layers
export const Stars = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${shadowsSmall};
  animation: ${animStar} 50s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${shadowsSmall};
  }
`;

export const Stars2 = styled.div`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${shadowsMedium};
  animation: ${animStar} 100s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${shadowsMedium};
  }
`;

export const Stars3 = styled.div`
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${shadowsBig};
  animation: ${animStar} 150s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${shadowsBig};
  }
`;

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

export const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  color: #fff;
  padding: 20px;
  cursor: pointer;
  opacity: 0;
  z-index: 11;
`;
