import styled, { keyframes } from 'styled-components';
import moonImage from '../image/moonWithBear.png';
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Load = styled.div`
  z-index: -999;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
`;

const RotatingMoon = styled.img`
  width: 550px; /* Размер изображения */
  height: 550px;
  animation: ${rotate} 3s linear infinite; /* Время анимации и бесконечный цикл */
`;

export const CustomLoader = () => {
  return <RotatingMoon src={moonImage} alt="Loading..." />;
};

