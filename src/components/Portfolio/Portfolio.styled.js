import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  background: radial-gradient(
      145.11% 101.78% at 50% 50%,
      #06050a 0%,
      #0f1924 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  width: 100%;
  height: 100%;
`;

export const PortfolioMainTitle = styled.h2`
  font-family: 'Freigeist', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 161px;
  line-height: 200px;
  display: flex;
  align-items: flex-end;
  margin: 0;
  background: linear-gradient(123.73deg, #ffffff -44.77%, #45aeb1 302.21%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  padding: 120px 65px 0 65px;
`;

export const PortfolioSubTitle = styled.p`
  font-family: 'Freigeist', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 86.5%;
  /* identical to box height, or 33px */
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0;
  padding: 0 65px 60px 65px;
`;

export const PortfolioImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0; /* Remove margin-bottom */
  padding-bottom: 80px; /* Add padding instead to space out the content */
`;

export const GreenOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 255, 0, 0.3); /* Полупрозрачный зелёный */
  mix-blend-mode: multiply; /* Эффект наложения */
  transition: opacity 0.3s ease; /* Добавляем плавность исчезновения */
  opacity: 1; /* Делаем видимым по умолчанию */
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none; /* Чтобы текст не мешал наведению на изображение */
  opacity: 1; /* Текст видим изначально */
  transition: opacity 0.3s ease; /* Анимация исчезновения текста */

  font-family: 'Freigeist', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 41px;
  line-height: 51px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 10px;
  color: #ffffff;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PortfolioImageContainer = styled.div`
  position: relative; /* Обязательно для позиционирования текста */
  color: #fff;
  flex: ${({ isLeft }) =>
    isLeft ? '4' : '6'}; /* 40% для левого, 60% для правого */
  height: auto; /* Чтобы сохранить пропорции изображений */

  &:hover ${TextOverlay}, &:hover ${GreenOverlay} {
    opacity: 0; /* Прячем текст и оверлей при наведении */
    pointer-events: none; /* Отключаем интерактивность для исчезнувших элементов */
  }
`;

export const PortfolioLeftImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const PortfolioRightImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ArrowLinkPortfolio = styled.img`
  width: 25px;
  height: 26px;
  margin-left: 18px;
  margin-top: 8px;
  fill: #FFF;
`;