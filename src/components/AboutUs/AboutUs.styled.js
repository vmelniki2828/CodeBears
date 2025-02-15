import styled from 'styled-components';

export const AboutUsMainContainer = styled.section `
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 36px;
`;

export const AboutUsSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 36px;
`;

export const AboutUsBigContainer = styled.div`
  width: 595px;
  height: 900px;
  display: flex; /* Включение Flexbox */
  justify-content: center; /* Центровка по горизонтали (опционально) */
  align-items: flex-end;
  position: relative;
  z-index: 1; /* Чтобы содержимое отображалось поверх */
  background: linear-gradient(
    150.1deg,
    rgba(17, 9, 24, 0.4) 8.38%,
    rgba(50, 67, 87, 0.4) 91.62%
  );
  border-radius: 25px;
  overflow: hidden;

  /* Псевдоэлемент для градиентной рамки */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 25px;
    padding: 1px; /* Толщина градиентной рамки */
    background: linear-gradient(
      30deg,
      rgba(87, 255, 154, 0.5) 30%,
      rgba(47, 224, 243, 0.5) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    z-index: -1; /* Убираем псевдоэлемент за контент */
  }

  > * {
    transition: transform 0.3s ease-in-out;
  }

  &:hover > * {
    transform: scale(1.1); /* Увеличение содержимого */
  }
`;

export const AboutUsSmallContainer = styled.div`
  padding: 57px;

  background: linear-gradient(
    41.66deg,
    rgba(37, 45, 66, 0.38) 4.08%,
    rgba(30, 37, 46, 0.38) 95.92%
  );
  mix-blend-mode: plus-lighter;
  border-radius: 25px;
  display: flex;
  gap: 40px;
`;

export const ArrowLink = styled.img`
  width: 25px;
  height: 26px;
  margin-left: 9px;
  margin-top: 13px;
`;

export const BearImg = styled.img`
  width: 595px;
  height: 855px;
`;
export const AboutUsGreenText = styled.p`
  margin: 0 0 30px 0;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 33px;
  line-height: 41px;
  text-transform: uppercase;
  color: #57ff9a;
  width: 232px;
`;

export const AboutUsSmallGreyText = styled.p`
  margin: 0;
  width: 232px;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const AboutUsTransparentText = styled.span`
  margin: 0;
  width: 209px;
  font-family: 'Gunterz', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 59px;
  line-height: 100%;
  text-align: right;
  color: transparent; /* Делаем текст прозрачным */
  -webkit-text-stroke: 2px black; /* Устанавливаем границы текста */
  font-stretch: 150%;
`;

export const AboutUsLinearText = styled.p`
  margin: 0;
  font-family: 'Gunterz', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 59px;
  line-height: 100%;
  text-align: right;
  background: linear-gradient(
    133.09deg,
    #ffffff -85.54%,
    rgba(255, 255, 255, 0) 104.49%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const AboutUsSmallerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
// import { MdArrowOutward } from 'react-icons/md';

// export const AboutUsConteiner = styled.div`
//   margin-top: -1500px;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   transition: opacity 0.1s ease, transform 0.1s ease;
// `;

// export const TopContainer = styled.div`
//   width: 100%;
//   display: flex;
// `;

// export const TopLeftContainer = styled.div`
//   width: 50%;
//   background-color: #247ce1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   opacity: 0;
//   font-family: 'Gunterz', sans-serif;
//   font-style: normal;
//   font-weight: 700;
//   font-size: 206px;
//   line-height: 100%;
//   color: #50da87;
//   height: 593px;
// `;

// export const TopRightContainer = styled.div`
//   width: 50%;
//   height: 593px;
//   background-color: #121d33;
//   opacity: 0;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// export const BottomContainer = styled.div`
//   width: 100%;
//   height: 593px;
//   background: radial-gradient(
//     90.59% 80.21% at 100% 100%,
//     #5c9dff 0%,
//     #50da87 100%
//   );
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative; /* Чтобы абсолютное позиционирование оверлея было относительно этого блока */
//   opacity: 1; /* Блок всегда видим */
// `;

// export const BottomOverlayContainer = styled.div`
//   position: absolute; /* Позиционируем относительно BottomContainer */
//   bottom: 0; /* Начинаем с низа BottomContainer */
//   left: 0;
//   width: 100%;
//   height: ${props => (props.expanded ? '1186px' : '0')}; /* Растягиваем высоту при expanded */
//   background: radial-gradient(
//     90.59% 80.21% at 100% 100%,
//     #5c9dff 0%,
//     #50da87 100%
//   );
//   opacity: ${props => (props.expanded ? '1' : '0')}; /* Плавно показываем оверлей */
//   visibility: ${props => (props.expanded ? 'visible' : 'hidden')}; /* Оверлей скрыт до клика */
//   transition: height 0.3s ease, opacity 0.3s ease, visibility 0.3s ease; /* Плавные анимации */
//   padding: 20px;
//   box-sizing: border-box;
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 2;
// `;

// export const TextLink = styled.a`
//   font-family: 'Freigeist';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 41px;
//   line-height: 51px;
//   display: flex;
//   align-items: center;
//   text-decoration-line: underline;

//   cursor: pointer;
//   color: #181818;
// `;

// export const MainTextAboutUs = styled.h1`
//   font-family: 'Freigeist';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 49px;
//   line-height: 61px;
//   display: flex;
//   align-items: center;
//   text-align: center;

//   margin-bottom: 30px;
//   margin-top: 0;

//   color: #57ff9a;
// `;

// export const TextAboutUs = styled.p`
//   font-family: 'Freigeist';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 34px;
//   line-height: 41px;
//   display: flex;
//   align-items: center;
//   text-align: center;

//   width: 633px;

//   margin: 0;

//   color: #ffffff;
// `;
