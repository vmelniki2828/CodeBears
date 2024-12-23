import styled from 'styled-components';

export const PWAContainer = styled.div`
  background: radial-gradient(
      145.11% 101.78% at 50% 50%,
      #06050a 0%,
      #0f1924 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  width: 100%;
  height: 100%;
`;

export const PWAMainTitle = styled.h1`
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

export const PWASubTItle = styled.p`
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

export const PWAImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 66px;
`;

export const PWAGreenOverlay = styled.div`
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

export const PWATextOverlay = styled.div`
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

export const PWAImageContainer = styled.div`
  position: relative; /* Обязательно для позиционирования текста */
  color: #fff;
  flex: ${({ isLeft }) =>
    isLeft ? '4' : '6'}; /* 40% для левого, 60% для правого */
  height: auto; /* Чтобы сохранить пропорции изображений */

  &:hover ${PWATextOverlay}, &:hover ${PWAGreenOverlay} {
    opacity: 0; /* Прячем текст и оверлей при наведении */
    pointer-events: none; /* Отключаем интерактивность для исчезнувших элементов */
  }
`;

export const PWALeftImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const PWARightImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const PWAText = styled.p`
  font-family: 'Freigeist', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 86.5%;
  /* or 33px */
  letter-spacing: -0.02em;
  padding: 85px 66px 75px 66px;
  margin: 0;
  color: #ffffff;
`;

export const PWAStarContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const PWAStarImg = styled.img`

`;
