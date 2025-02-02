import styled from 'styled-components';

export const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const Star = styled.img``;

export const FormBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextConteiner = styled.div`
  width: 811px;
  margin-right: 20px;
`;

export const MainText = styled.h1`
  width: 811px;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 75px;
  line-height: 85%;
  text-transform: uppercase;
  background: linear-gradient(123.73deg, #ffffff -44.77%, #45aeb1 302.21%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0px 0px 1.5px rgba(87, 255, 154, 0.69), 0px 0px 28.7px #45aeb1;
  margin: 0 0 30px 0;
`;

export const SubText = styled.p`
  width: 808px;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 86.5%;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export const FormConteiner = styled.div``;

export const Form = styled.form`
  display: flex;
  box-sizing: border-box;
  width: 469px;
  height: 404px;
  background: rgba(10, 10, 10);
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

export const InputWrapper = styled.div`
  position: relative;
  width: 396px;
  margin-top: 35px;
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 0;
  bottom: 10px;
  font-size: 16px;
  color: #d9d9d9;
  transition: all 0.3s ease;
  pointer-events: none;
  font-family: 'Freigeist', sans-serif;
  font-style: normal;
  font-weight: 500;

  ${({ isActive }) =>
    isActive &&
    `
    transform: translateY(-20px);
    font-size: 14px;
    color: #00f5b3;
  `}
`;

export const InputLine = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
  color: #fff;
  font-size: 16px;
  width: 100%;
  height: 30px;
  padding-top: 10px;
  caret-color: #fff; /* Цвет курсора */

  &:focus + ${InputLabel}, &:not(:placeholder-shown) + ${InputLabel} {
    transform: translateY(-20px);
    font-size: 14px;
    color: #00f5b3;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0px 1000px rgba(10, 10, 10) inset !important;
    -webkit-text-fill-color: #fff !important;
    caret-color: #fff !important;
  }
`;

export const TextAreaWrapper = styled.div`
  position: relative;
  margin-top: 30px;
`;

export const TextAreaLabel = styled.label`
  position: absolute;
  top: 15px;
  left: 14px;
  font-size: 16px;
  color: #d9d9d9;
  transition: all 0.3s ease;
  pointer-events: none;
  font-family: 'Freigeist', sans-serif;
  font-style: normal;
  font-weight: 500;
  background-color: rgba(10, 10, 10);
  padding: 2px 8px;

  z-index: 3;

  ${({ isActive }) =>
    isActive &&
    `
    transform: translateY(-25px);
    font-size: 14px;
    color: #00f5b3;
  `}
`;

export const TextArea = styled.textarea`
  width: 396px;
  height: 155px;
  background-color: rgba(10, 10, 10);
  border-radius: 20px;
  color: #fff;
  outline: none;
  padding: 15px 10px 10px;
  resize: none;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  position: relative;
  z-index: 1;

  &:focus {
    border: 1px solid #00f5b3;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
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

export const FileIcon = styled.img`
  width: 34px;
  height: 36px;

  color: #57ff9a;
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

export const ArrowContLink = styled.img`
  width: 25px;
  height: 26px;
  margin-left: 18px;
  margin-top: 8px;
  fill: #57ff9a;
`;
