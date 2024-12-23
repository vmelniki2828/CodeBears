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
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  z-index: 1001;

  &:hover {
    color: #ff6b6b;
  }
`;

export const MainModalText = styled.h1`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 108px;
  line-height: 85%;

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

  margin-bottom: 40px;

  width: 785px;
`;

export const ModalText = styled.p`
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 86.5%;
  letter-spacing: -0.02em;

  color: #000000;

  width: 663px;
`;

export const FormConteiner = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  border-color: rgba(87, 255, 154, 0.5);

  &:focus {
    border-bottom-color: #50da87; /* Цвет нижней границы при фокусе */
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
