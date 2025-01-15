import styled from 'styled-components';

export const MainMotionContainer = styled.div`
  background: radial-gradient(
      145.11% 101.78% at 50% 50%,
      #06050a 0%,
      #0f1924 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`;

export const MotionPageContainer = styled.div`
  width: 1310px;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 150px;
`;

export const MotionMainTitle = styled.h1`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 132px;
  line-height: 164px;
  display: flex;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  padding-top: 127px;

  background: linear-gradient(123.73deg, #ffffff -44.77%, #45aeb1 302.21%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

