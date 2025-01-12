import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ArrowLink = styled.img`
  width: 25px;
  height: 26px;
  margin-left: 18px;
  margin-top: 8px;
  fill: #fff;
`;
