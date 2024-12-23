import styled from 'styled-components';
import { MdOutlineAttachFile } from 'react-icons/md';

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
`;

export const PWAStarImg = styled.img``;

export const FormBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 200px;
`;

export const TextPwaConteiner = styled.div`
  width: 700px;

  margin-right: 100px;
`;

export const MainPwaText = styled.h1`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 108px;
  line-height: 85%;

  color: #fff;

  margin-bottom: 70px;

  width: 700px;
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
  flex-direction: column;
  align-items: center;
  max-width: 400px;

  background-color: rgba(10, 10, 10, 0.69);

  border-radius: 20px;

  width: 400px;
  padding: 20px;
`;

export const InputField = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 2px solid #ccc;
  background: transparent;
  font-size: 16px;

  color: white;

  width: 350px;
  outline: none;
  transition: border-bottom-color 0.3s ease;

  &:focus {
    border-bottom-color: #50da87; 
  }
`;

export const TextAreaField = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid rgba(8, 40, 44, 0.7);
  font-size: 16px;
  resize: none;
  height: 155px;
  width: 350px;

  color: white;

  background: linear-gradient(
    99.81deg,
    rgba(3, 16, 19, 0.7) -15.86%,
    rgba(8, 40, 44, 0.7) 147.26%
  );
  border-radius: 20px;
  
`;

export const SubmitButton = styled.a`
  background: rgba(10, 10, 10, 0.69);
  backdrop-filter: blur(10.55px);
  border-radius: 53px;

  cursor: pointer;

  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 33px;
  line-height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #57ff9a;

  width: 330px;
  height: 99px;

  text-decoration: underline;
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
    margin-right: 10px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

export const FileIcon = styled(MdOutlineAttachFile)`
  width: 30px;
  height: 30px;

  color: #57ff9a;
`;
