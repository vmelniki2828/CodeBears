import styled from 'styled-components';
import { MdArrowOutward } from 'react-icons/md';

export const AboutUsConteiner = styled.div`
  margin-top: -1500px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: opacity 0.1s ease, transform 0.1s ease;
`;

export const TopContainer = styled.div`
  width: 100%;
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
  font-size: 206px;
  line-height: 100%;
  color: #50da87;
  height: 593px;
`;

export const TopRightContainer = styled.div`
  width: 50%;
  height: 593px;
  background-color: #121d33;
  opacity: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 593px;
  background: radial-gradient(
    90.59% 80.21% at 100% 100%,
    #5c9dff 0%,
    #50da87 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* Курсор для кликабельности */
  position: relative; /* Чтобы абсолютное позиционирование оверлея было относительно этого блока */
  opacity: 1; /* Блок всегда видим */
`;

export const BottomOverlayContainer = styled.div`
  position: absolute; /* Позиционируем относительно BottomContainer */
  bottom: 0; /* Начинаем с низа BottomContainer */
  left: 0;
  width: 100%;
  height: ${props => (props.expanded ? '1186px' : '0')}; /* Растягиваем высоту при expanded */
  background: radial-gradient(
    90.59% 80.21% at 100% 100%,
    #5c9dff 0%,
    #50da87 100%
  );
  opacity: ${props => (props.expanded ? '1' : '0')}; /* Плавно показываем оверлей */
  visibility: ${props => (props.expanded ? 'visible' : 'hidden')}; /* Оверлей скрыт до клика */
  transition: height 0.3s ease, opacity 0.3s ease, visibility 0.3s ease; /* Плавные анимации */
  cursor: pointer;
  padding: 20px;
  box-sizing: border-box;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const TextLink = styled.a`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 41px;
  line-height: 51px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;

  cursor: pointer;

  margin-right: 9px;

  color: #181818;
`;

export const ArrowLink = styled(MdArrowOutward)`
  width: 25px;
  height: 26px;
`;

export const MainTextAboutUs = styled.h1`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 49px;
  line-height: 61px;
  display: flex;
  align-items: center;
  text-align: center;

  margin-bottom: 30px;
  margin-top: 0;

  color: #57ff9a;
`;

export const TextAboutUs = styled.p`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;

  width: 633px;

  margin: 0;

  color: #ffffff;
`;
