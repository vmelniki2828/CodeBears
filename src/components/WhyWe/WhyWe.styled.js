import styled from 'styled-components';

export const WhyWeContainer = styled.div`
  height: 100%;
  transform: translate(0px, 0px);
  color: #fff;
  padding: 120px 98px 98px 98px;
`;

export const WhyWeMainTitle = styled.h1`
  opacity: 0; /* Скрываем изначально */
  width: 1265px;
  font-family: 'Gunterz', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 262px;
  line-height: 100%;

  background: linear-gradient(123.73deg, #ffffff -44.77%, #45aeb1 302.21%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0px 0px 19.3px rgba(87, 255, 154, 0.2),
    0px 0px 71.9px rgba(69, 174, 177, 0.42);
  margin: 0 auto 60px auto;
`;

export const WhyWeSubTitle = styled.p`
  opacity: 0; /* Скрываем изначально */

  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 66.7397px;
  line-height: 87px;
  width: 1265px;
  margin: 0 auto 85px auto;
  color: #ffffff;
`;

export const WhyWeList = styled.ul`
  opacity: 0; /* Скрываем изначально */

  list-style: none;
  width: 1265px;
  margin: 0 auto;
  padding: 0;
  gap: 133px;
  display: flex;
`;

export const WhyWeItem = styled.li`
  width: 338px;
  border-top: 1px solid #fff;
`;

export const WhyWeItemTitle = styled.h2`
  width: 338px;
  height: 25px;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 28.4904px;
  line-height: 86.5%;
  /* identical to box height, or 25px */
  letter-spacing: -0.02em;

  color: #ffffff;
`;

export const WhyWeItemSubTitle = styled.p`
  width: 338px;
  height: 259px;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 28.4904px;
  line-height: 104%;
  /* or 30px */
  letter-spacing: -0.02em;

  color: #ffffff;

  text-shadow: 0px 5.18008px 20.7203px rgba(0, 0, 0, 0.68);
`;
