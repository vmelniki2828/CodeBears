import styled, { keyframes } from 'styled-components';

// Animation for stars' movement
const animStar = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-2000px);
  }
`;

const fadeInOnLoad = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
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

export const StarsWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #0f1a26 0%, #050608 100%);
`;

export const MainConteiner = styled.main``;

// Stars layers with fade-in and fade-out effects for each cycle
export const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${shadowsSmall};
  opacity: 0; /* Изначально невидимые */
  animation: ${fadeInOnLoad} 3s ease-out forwards,
    ${animStar} 50s linear infinite;
  animation-delay: 0.3s;
  z-index: 1;

  &:after {
    content: ' ';
    position: absolute;
    top: 3000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${shadowsSmall};
  }
`;

export const Stars2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${shadowsMedium};
  opacity: 0;
  animation: ${fadeInOnLoad} 3s ease-out forwards,
    ${animStar} 100s linear infinite;
  animation-delay: 0.6s;
  z-index: 2;

  &:after {
    content: ' ';
    position: absolute;
    top: 3000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${shadowsMedium};
  }
`;

export const Stars3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${shadowsBig};
  opacity: 0;
  animation: ${fadeInOnLoad} 3s ease-out forwards,
    ${animStar} 150s linear infinite;
  animation-delay: 0.9s;
  z-index: 3;

  &:after {
    content: ' ';
    position: absolute;
    top: 3000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${shadowsBig};
  }
`;

export const StaticStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${shadowsSmall};
`;

export const StaticStars2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${shadowsMedium};
`;

export const MovingStars = styled.div`
  position: absolute;
  top: 1800px;
  left: 0;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${shadowsSmall};
  animation: ${animStar} 50s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 3000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${shadowsSmall};
  }
`;

export const MovingStars2 = styled.div`
  position: absolute;
  top: 1500px;
  left: 0;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${shadowsMedium};
  animation: ${animStar} 100s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 3000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${shadowsMedium};
  }
`;

export const MovingStars3 = styled.div`
  position: absolute;
  top: 1200px;
  left: 0;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${shadowsBig};
  animation: ${animStar} 150s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 3000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${shadowsBig};
  }
`;
