import styled from 'styled-components';
import { MdOutlineAttachFile } from 'react-icons/md';

export const ContactUsModalConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextModalConteiner = styled.div`
  width: 700px;
  margin-right: 100px;
  margin-top: -20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 150px;
  right: 150px;
  background: none;
  border: none;
  font-size: 64px;
  color: white;
  cursor: pointer;
  z-index: 1001;
  color: #000;

  &:hover {
    color: #57ff9a;
  }
`;

export const MainModalText = styled.h1`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 108px;
  line-height: 85%;
  color: #000;
  margin-top: 0;
  margin-bottom: 70px;

  width: 700px;
`;

export const TitleModalText = styled.h2`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 86.5%;
  letter-spacing: -0.02em;
  color: #000;
  margin-bottom: 40px;

  width: 785px;
`;

export const ModalText = styled.p`
  font-family: 'Freigeist', sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 32px;
  line-height: 86.5%;
  letter-spacing: -0.02em;
  color: #000000;
  width: 663px;
  margin: 0;
`;

export const FormConteiner = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(10, 10, 10, 0.69);

  border-radius: 20px;
  width: 469px;
  height: 405px;

  &:hover {
    border-color: #57ff9a;
    color: white;
    box-shadow: 0px 0px 10px #57ff9a;
  }
`;

export const InputField = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 2px solid #ccc;
  background: transparent;
  font-size: 16px;

  color: #57ff9a;

  width: 340px;
  outline: none;
  transition: border-bottom-color 0.3s ease;
  border-color: rgba(87, 255, 154, 0.5);
  margin-top: 40px;
  &:nth-of-type(2) {
    margin-top: 15px;
  }

  &:focus {
    border-bottom-color: #50da87; /* Цвет нижней границы при фокусе */
  }

  transition: all 0.3s ease;
`;

export const TextAreaField = styled.textarea`
  border: none;
  font-size: 16px;
  resize: none;
  height: 115px;
  width: 366px;
  padding: 20px;
  margin-top: 50px;
  margin-bottom: 0;

  color: #57ff9a;

  background: linear-gradient(
    99.81deg,
    rgba(3, 16, 19, 0.7) -15.86%,
    rgba(8, 40, 44, 0.7) 147.26%
  );
  border-radius: 20px;

  &:focus {
    outline: none; /* Убирает белую рамку при фокусе */
  }
`;

export const SubmitButton = styled.a`
  background: rgba(10, 10, 10, 0.69);
  backdrop-filter: blur(10.55px);
  border-radius: 53px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #57ff9a;

  width: 346px;
  height: 99px;
`;

export const SendText = styled.p`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 41px;

  text-decoration: underline;
  text-decoration-thickness: 2px; /* Толщина линии подчеркивания */
  text-underline-offset: 7px; /* Отступ линии от текста */
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
    color: #57ff9a;

    &:hover {
      color: #fff;
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
`;

export const ArrowContLink = styled.img`
  width: 25px;
  height: 26px;
  margin-left: 18px;
  margin-top: 8px;
  fill: #57ff9a;
`;
