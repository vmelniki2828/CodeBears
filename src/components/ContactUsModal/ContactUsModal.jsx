import React, { useState } from 'react';
import {
  ContactUsModalConteiner,
  CloseButton,
  TextModalConteiner,
  MainModalText,
  TitleModalText,
  ModalText,
  FormConteiner,
  Form,
  InputField,
  TextAreaField,
  ButtonsContainer,
  FileInputButton,
  SubmitButton,
  FileIcon,
  SendText,
  ArrowContLink,
} from './ContactUsModal.styled';
import { ArrowLink } from 'components/AboutUs/AboutUs.styled';
import AttachIcon from '../../image/Vector66.svg';
import Arrow from '../../image/Vector65.svg'


const ContactUsModal = ({ handleButtonClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setFormData(prevData => ({
      ...prevData,
      file,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    handleButtonClick(e);
  };

  return (
    <>
      <ContactUsModalConteiner>
        <CloseButton onClick={handleButtonClick}>✕</CloseButton>
        <TextModalConteiner>
          <MainModalText>ЗВ’ЯЖІТЬСЯ З НАМИ!</MainModalText>
          <TitleModalText>
            Залиште ваші данні та питання у формі зворотнього зв’язку
          </TitleModalText>
          <ModalText>
            Наша команда оперативно опрацює запит, щоб надати відповідь або запропонувати рішення. Ми зв’яжемося з клієнтом у найкоротші терміни через зазначений спосіб зв’язку для уточнення деталей або подальшої співпраці.
          </ModalText>
        </TextModalConteiner>
        <FormConteiner>
          <Form>
            <InputField
              type="text"
              name="name"
              // placeholder="Ваше ім’я"
              value={formData.name}
              onChange={handleInputChange}
            />
            <InputField
              type="email"
              name="email"
              // placeholder="Ваш email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextAreaField
              name="message"
              // placeholder="Ваше повідомлення"
              value={formData.message}
              onChange={handleInputChange}
            />
          </Form>
          <ButtonsContainer>
            <FileInputButton>
              <label htmlFor="file">
                <FileIcon src={AttachIcon} />
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
              />
            </FileInputButton>
            <SubmitButton onClick={handleSubmit}>
              <SendText>Надіслати </SendText>
              <ArrowContLink src={Arrow} />
            </SubmitButton>
          </ButtonsContainer>
        </FormConteiner>
      </ContactUsModalConteiner>
    </>
  );
};

export default ContactUsModal;
