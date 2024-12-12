import styled from 'styled-components';

export const AboutUsConteiner = styled.div`
  opacity: 0;
  transform: translateY(100vh);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: opacity 0.1s ease, transform 0.1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  background: #0f1924;
`;
