import styled from 'styled-components';
import green_play from '../../../image/green_play.png';

export const BanersPageContainer = styled.div`
  width: 1310px;
  height: 100%;
  margin: 0 auto;
`;

export const MainBannerContainer = styled.div`
  background: radial-gradient(
      145.11% 101.78% at 50% 50%,
      #06050a 0%,
      #0f1924 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`;

export const BanersMainTitle = styled.h1`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 132px;
  line-height: 164px;
  display: flex;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  padding-top: 127px;

  background: linear-gradient(123.73deg, #ffffff -44.77%, #45aeb1 302.21%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const BanersSubTitle = styled.h2`
  margin: 60px 0 30px 0;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 86.5%;
  letter-spacing: -0.02em;
  background: linear-gradient(123.73deg, #ffffff -44.77%, #45aeb1 302.21%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0px 0px 1.5px rgba(87, 255, 154, 0.69), 0px 0px 28.7px #45aeb1;
`;

export const BanersFormatsText = styled.h3`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 86.5%;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 40px 0;
`;

export const BanersDefaultText = styled.p`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 86.5%;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 1310px;
`;

export const BanersImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BanersGreenOverlay = styled.div`
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

export const BanersTextOverlay = styled.div`
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

export const BanersImageContainer = styled.div`
  position: relative; /* Обязательно для позиционирования текста */
  color: #fff;
  flex: ${({ isLeft }) =>
    isLeft ? '4' : '6'}; /* 40% для левого, 60% для правого */
  height: auto; /* Чтобы сохранить пропорции изображений */

  &:hover ${BanersTextOverlay}, &:hover ${BanersGreenOverlay} {
    opacity: 0; /* Прячем текст и оверлей при наведении */
    pointer-events: none; /* Отключаем интерактивность для исчезнувших элементов */
  }
`;

export const BanersImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ArrowLinkBaners = styled.img`
  width: 25px;
  height: 26px;
  margin-left: 18px;
  margin-top: 8px;
  fill: #fff;
`;

export const BanersFormatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 60px;
  color: #fff;
`;

export const BanersFormatsContainerItem = styled.div`
  width: 560px;
  background: url(.png),
    linear-gradient(
      100.71deg,
      rgba(30, 40, 66, 0.28) -5.17%,
      rgba(18, 22, 33, 0.28) 147.95%
    );
  background-blend-mode: lighten, plus-lighter;
  padding: 40px;
`;

export const BanersFormatsContainerItemText = styled.p`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 49px;
  line-height: 61px;
  color: #57ff9a;
  margin: 0 0 40px 0;
`;

export const BanersFormatsContainerItemImg = styled.img`
  width: 536px;
  height: 228px;
  margin: 0 0 30px 0;
`;

export const BanersFormatsContainerItemSubText = styled.p`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 86.5%;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0;
`;

export const AdvantagesList = styled.ul`
  margin: 0 0 95px 0;
`;

export const AdvantagesListItem = styled.li`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 86.5%;
  letter-spacing: -0.02em;
  width: 1182px;
  color: #ffffff;
  margin-top: 40px;
`;

export const TypeMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  margin-bottom: 60px;
`;

export const TypeSubContainer = styled.div`
  background: url(.png),
    linear-gradient(
      100.71deg,
      rgba(30, 40, 66, 0.28) -5.17%,
      rgba(18, 22, 33, 0.28) 147.95%
    );
  background-blend-mode: lighten, plus-lighter;
  padding: 27px 27px 54px 27px;
`;

export const TypeSubContainerText = styled.p`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  margin: 0 0 15px 0;
  color: #57ff9a;
  width: 344px;
`;

export const TypeSubContainerSubText = styled.p`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 86.5%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 290px;
  margin: 0 auto 18px;
`;

export const TypeSubContainerImage = styled.div`
  position: relative; /* Устанавливаем контейнер относительно */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 290px;
  width: 290px;
  cursor: pointer;

  img {
    display: block;
    height: 100%;
    width: 100%;
  }

  /* Псевдоэлемент для дополнительной картинки */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px; /* Размер дополнительной картинки */
    height: 150px;
    background: url(${green_play}) no-repeat center center;
    background-size: contain;
    opacity: 0; /* Скрываем картинку по умолчанию */
    transition: opacity 0.3s ease; /* Плавный переход */
  }

  &:hover::after {
    opacity: 1; /* Показываем картинку при наведении */
  }
`;

export const ExapmlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 40px 0;
`;

export const AdaptContainer = styled.div`
  margin: 40px 0 60px;
`;
