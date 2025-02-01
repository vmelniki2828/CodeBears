import styled, { keyframes } from 'styled-components';

// Animation for stars' movement
const animStar = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  3% {
    opacity: 1;
  }
  97% {
    opacity: 1;
  }
  100% {
    transform: translateY(-2000px);
    opacity: 0;
  }
`;

// Generate multiple box shadows
const multipleBoxShadow = n => {
  const width = window.innerWidth;

  const shadows = Array.from({ length: n }, () => {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * width)* 3;
    return `${x}px ${y}px #FFF`;
  });
  return shadows.join(', ');
};

// Shadow variables
const shadowsSmall = multipleBoxShadow(1000);
const shadowsMedium = multipleBoxShadow(300);
const shadowsBig = multipleBoxShadow(200);

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
  animation: ${animStar} 50s ease-in-out infinite;
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
  animation: ${animStar} 100s ease-in-out infinite;
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
  animation: ${animStar} 150s ease-in-out infinite;
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
