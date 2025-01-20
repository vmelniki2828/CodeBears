import styled from 'styled-components';

export const MainBrandBookContainer = styled.div`
  background: radial-gradient(
      145.11% 101.78% at 50% 50%,
      #06050a 0%,
      #0f1924 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`;

export const BrandBookPageContainer = styled.div`
  width: 1310px;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 150px;
  overflow: hidden;
`;

export const BrandBookMainTitle = styled.h1`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 128px;
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

export const BrandBookDefaultText = styled.p`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 86.5%;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 1310px;

  li {
    padding-top: 15px;
  }
`;

export const BrandBookSubTitle = styled.h2`
  margin: 60px 0 30px 0;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 86.5%;
  letter-spacing: -0.02em;
  background: linear-gradient(123.73deg, #ffffff -44.77%, #45aeb1 302.21%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0px 0px 1.5px rgba(87, 255, 154, 0.69), 0px 0px 28.7px #45aeb1;
`;
