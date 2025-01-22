import styled from 'styled-components';
import { MdOutlineAttachFile } from 'react-icons/md';

export const PWAContainer = styled.main`
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
  font-weight: 100;
  font-size: 38px;
  line-height: 86.5%;
  /* or 33px */
  letter-spacing: -0.02em;
  padding: 85px 66px 75px 66px;
  margin: 0;
  color: #ffffff;
`;

export const PwaTextForm = styled.p`
  width: 663px;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 100;
  font-size: 32px;
  line-height: 86.5%;
  letter-spacing: -0.02em;

  color: #ffffff;
`;

export const PWAStarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PWAStarImg = styled.img``;

export const FormBlock = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 200px;
`;

export const TextPwaConteiner = styled.div`
  width: 811px;
  margin-right: 20px;
`;

export const MainPwaText = styled.h1`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 108px;
  line-height: 85%;
  margin: 0;
  color: #fff;

  margin-bottom: 70px;
`;

export const TitlePwaText = styled.h2`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 86.5%;
  letter-spacing: -0.02em;

  color: #fff;

  margin-bottom: 40px;

  width: 785px;
`;

export const PwaText = styled.p`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 86.5%;
  letter-spacing: -0.02em;

  color: #fff;
  width: 663px;
`;

export const FormConteiner = styled.div``;

export const Form = styled.form`
  display: flex;
  box-sizing: border-box;
  width: 469px;
  height: 404px;
  background: rgba(10, 10, 10, 0.69);
  backdrop-filter: blur(10.55px);
  border-radius: 20px;
  flex-direction: column;
  align-items: center;

  /* Градиентная рамка */
  position: relative;
  padding: 2px; /* Толщина рамки */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px; /* Скругление совпадает с контейнером */
    padding: 0.5px; /* Толщина рамки */
    background: linear-gradient(135deg, white, #000); /* Градиент рамки */
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }

  transition: all 0.3s ease;

  &:hover {
    border-color: #57ff9a;
    color: white;
    box-shadow: 0px 0px 10px #57ff9a;
  }
`;

export const InputField = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
  color: #fff;
  font-size: 16px;
  margin-top: 50px;
  width: 360px;
  height: 20px;
  &:focus {
    border-bottom: 1px solid #00f5b3;
  }
`;

export const TextAreaField = styled.textarea`
  width: 396px;
  height: 155px;
  background: linear-gradient(99.81deg, #090a0c -15.86%, #131518 147.26%);
  border-radius: 20px;
  margin-top: 60px;
  color: #fff;
  outline: none;
  padding: 10px;
  resize: none;
`;

export const SubmitButton = styled.a`
  width: 344px;
  height: 97px;
  border: 1px solid grey;
  border-radius: 53px;
  color: #00f5b3;

  gap: 10px;
  cursor: pointer;
  backdrop-filter: blur(10.55px);

  display: flex;
  align-items: center;
  text-decoration: underline;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 33px;
  line-height: 41px;
  justify-content: center;
  background: rgba(10, 10, 10, 0.69);

  transition: all 0.3s ease;
  text-decoration: underline;
  text-decoration-thickness: 2px; /* Толщина линии подчеркивания */
  text-underline-offset: 7px; /* Отступ линии от текста */
  &:hover {
    border-color: #57ff9a;
    box-shadow: 0px 0px 10px #57ff9a;
  }
`;

export const FileInputButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  input[type='file'] {
    display: none; /* Скрываем стандартный input */
  }

  label {
    background: rgba(10, 10, 10, 0.69);
    border-radius: 53px;
    padding: 30px 33px;
    cursor: pointer;
    font-size: 16px;
    margin-right: 24px;
    transition: all 0.3s ease;
    border: 1px solid grey;

    &:hover {
      border-color: #57ff9a;
      box-shadow: 0px 0px 10px #57ff9a;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

export const FileIcon = styled.img`
  width: 34px;
  height: 36px;

  color: #57ff9a;
`;

export const ArrowContLinkPWA = styled.img`
  width: 25px;
  height: 26px;
  margin-left: 18px;
  margin-top: 8px;
  fill: #57ff9a;
`;

export const ArrowLinkPWA = styled.img`
  width: 25px;
  height: 26px;
  margin-left: 18px;
  margin-top: 8px;
  fill: #fff;
`;
