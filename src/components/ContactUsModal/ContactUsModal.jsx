import React, { useEffect, useState } from 'react';
import {
  ContactUsModalConteiner,
  ModalOverlay,
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
} from './ContactUsModal.styled';
import { ArrowLink } from 'components/AboutUs/AboutUs.styled';

const ContactUsModal = ({ setModalVisible }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
      setIsVisible(true);
    }, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const closeModal = () => {
    setIsAnimating(true); // Начало анимации уменьшения
    setTimeout(() => {
      setModalVisible(false); // Скрытие модалки после завершения анимации
    }, 300); // Длительность анимации
  };

  return (
    <>
      <ModalOverlay
        onClick={closeModal}
        isVisible={isVisible}
        isAnimating={isAnimating}
      />
      <ContactUsModalConteiner isVisible={isVisible} isAnimating={isAnimating}>
        <CloseButton onClick={closeModal}>Закрыть ✕</CloseButton>
        <TextModalConteiner>
          <MainModalText>ЗВ’ЯЖІТЬСЯ З НАМИ!</MainModalText>
          <TitleModalText>
            Залиште ваші данні та питання у формі зворотнього зв’язку
          </TitleModalText>
          <ModalText>
            Наша команда оперативно опрацює запит, щоб надати відповідь або
            запропонувати рішення.
          </ModalText>
        </TextModalConteiner>
        <FormConteiner>
          <Form>
            <InputField type="text" name="name" placeholder="Ваше ім’я" />
            <InputField type="email" name="email" placeholder="Ваш email" />
            <TextAreaField name="message" placeholder="Ваше повідомлення" />
          </Form>
          <ButtonsContainer>
            <FileInputButton>
              <label htmlFor="file">
                <FileIcon />
              </label>
              <input type="file" id="file" name="file" />
            </FileInputButton>

            <SubmitButton type="submit">
              Надіслати
              <ArrowLink />
            </SubmitButton>
          </ButtonsContainer>
        </FormConteiner>
      </ContactUsModalConteiner>
    </>
  );
};

export default ContactUsModal;
