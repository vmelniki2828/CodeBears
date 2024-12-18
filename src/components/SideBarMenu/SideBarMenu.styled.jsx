import styled from 'styled-components';

export const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0b1323;
  color: #fff;
  opacity: 0;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SideBarMenuList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px 150px 0 150px;
`;

export const SideBarListLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const SideBarListRight = styled.div`
  display: flex;
  width: 50%;
`;

export const SideBarListRightLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const SideBarListRightLeftItems = styled.p`
  margin: 0;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 25.845px;
  line-height: 32px;
  color: #b1c5b9;
  transition: color 0.3s ease-in-out; // Добавляем плавный переход цвета

  &:hover {
    color: #e7fff0; // Цвет при наведении
    cursor: pointer; // Изменяем курсор на указатель
  }
`;

export const SideBarListRightRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const SideBarListRightRightItems = styled.p`
  margin: 0;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 25.845px;
  line-height: 32px;
  color: #b1c5b9;
  transition: color 0.3s ease-in-out; // Добавляем плавный переход цвета

  &:hover {
    color: #e7fff0; // Цвет при наведении
    cursor: pointer; // Изменяем курсор на указатель
  }
`;

export const SideBarListLeftItem = styled.p`
  margin: 0;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 25.845px;
  line-height: 33px;
  color: #e7fff0;
  transition: color 0.3s ease-in-out; // Добавляем плавный переход цвета

  &:hover {
    color: #57ff9a; // Цвет при наведении
    cursor: pointer; // Изменяем курсор на указатель
  }
`;


export const FixedBottomBlock = styled.div`
  width: 100vw;
  height: 150px;
background: 
  linear-gradient(to right, #3ADF7C 42vw, #162C3B 42vw);
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  font-family: 'Freigeist', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 76px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FixedBottomBlockText = styled.p`
  width: 100vw;
  color: transparent; /* Make the text transparent */
  text-align: center;
  background-clip: text;
  -webkit-background-clip: text; /* For older WebKit browsers */
  background-image: linear-gradient(to right, #0B1323 42vw, #3ADF7C 42vw);
`;




