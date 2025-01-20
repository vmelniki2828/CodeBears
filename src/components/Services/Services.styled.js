import styled from 'styled-components';
import { FiArrowUpLeft } from 'react-icons/fi';

export const ServicesContainer = styled.main`
  background: radial-gradient(
      145.11% 101.78% at 50% 50%,
      #06050a 0%,
      #0f1924 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  width: 100%;
`;

export const BackArrow = styled(FiArrowUpLeft)`
  width: 25px;
  height: 25px;
  margin: 30px 0 0 63px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease; /* Плавный переход для всех изменяемых свойств */
  position: fixed;
  z-index: 999;

  &:hover {
    color: #949494;
  }
`;

export const ServicesMainContainer = styled.section`
  padding: 120px 100px 150px 100px;
  color: #fff;
  display: flex;
  justify-content: space-around;
  gap: 150px;
`;

export const ServicesLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const ServicesLeftTopContainer = styled.div`
  border-top: 1px solid white; /* белая верхняя граница */
`;

export const ServicesLeftTopTitle = styled.h2`
  font-family: 'Gunterz', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 86.5%;
  /* identical to box height, or 19px */
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 15px 0 30px 0;
  text-transform: uppercase;
`;

export const MainListContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 261px;
  gap: 25px;

  list-style: none;

  padding: 0;
`;

export const MainListItem = styled.li`
  font-family: 'Freigeist', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 104%;
  letter-spacing: -0.02em;
  cursor: pointer;
  color: #ffffff;

  text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.68);
  margin: 0;

  /* Добавляем стиль при наведении */
  &:hover {
    color: #3adf7c; /* Например, золотой цвет */
    text-shadow: 0px 4px 16px #3adf7c; /* Увеличиваем яркость тени */
  }
`;

export const ServicesLeftBottomContainer = styled.div`
  border-top: 1px solid white; /* белая верхняя граница */
`;

export const ServicesRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServicesMainTitle = styled.h2`
  font-family: 'Freigeist', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 113px;
  line-height: 141px;
  display: flex;
  align-items: center;
  text-align: right;
  margin:0 0 100px 0;
  background: linear-gradient(123.73deg, #FFFFFF -44.77%, #45AEB1 302.21%);
  -webkit-background-clip: text;      
  -webkit- text-fill-color: transparent;            
  background-clip:  text;
  text-fill-color: transparent;
  height:74px;
`;

export const ServicesRightBottomContainer = styled.div`
  border-top: 1px solid white;
`;
