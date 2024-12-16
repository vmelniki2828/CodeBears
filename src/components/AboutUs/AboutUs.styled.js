import styled from 'styled-components';

export const AboutUsConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  z-index: 10;
  transition: opacity 0.1s ease, transform 0.1s ease;
`;

export const TopContainer = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
`;

export const TopLeftContainer = styled.div`
  width: 50%;
  background-color: #247ce1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  font-family: 'Gunterz', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 226px;
  line-height: 100%;
  color: #50da87;
`;

export const TopRightContainer = styled.div`
  width: 50%;
  background-color: #121d33;
`;

export const BottomContainer = styled.div`
  width: 100vw;
  height: 50vw;
  background: radial-gradient(
    90.59% 80.21% at 100% 100%,
    #5c9dff 0%,
    #50da87 100%
  );
`;
