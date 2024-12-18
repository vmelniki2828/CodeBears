import { useState } from 'react';
import {
  ContactUsModalConteiner,
  FileInputButton,
  Form,
  InputField,
  MainModalText,
  ModalOverlay,
  ModalText,
  SubmitButton,
  TextAreaField,
  TextModalConteiner,
  TitleModalText,
  ButtonsContainer,
  FormConteiner,
  FileIcon,
  CloseButton,
} from './ContactUsModal.styled';
import { ArrowLink } from 'components/AboutUs/AboutUs.styled';

const ContactUsModal = ({ setModalVisible }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const closeModal = () => {
    setIsAnimating(true); // Запускаем анимацию закрытия
    setTimeout(() => {
      setModalVisible(false); // Скрываем модалку после завершения анимации
      document.body.style.overflow = 'auto'; // Возвращаем скролл
    }, 300); // Длительность анимации (в миллисекундах)
  };

  const stopScroll = () => {
    document.body.style.overflow = 'hidden'; // Отключаем скролл при открытии
  };

  useState(() => {
    stopScroll();
  }, []);

  return (
    <>
      <ModalOverlay
        onClick={closeModal}
        isAnimating={isAnimating} // Для анимации затемнения
      />
      <ContactUsModalConteiner isAnimating={isAnimating}>
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
            <InputField
              type="text"
              name="name"
              placeholder="Ваше ім’я"
            />
            <InputField
              type="email"
              name="email"
              placeholder="Ваш email"
            />
            <TextAreaField
              name="message"
              placeholder="Ваше повідомлення"
            />
          </Form>
          <ButtonsContainer>
            <FileInputButton>
              <label htmlFor="file">
                <FileIcon />
              </label>
              <input
                type="file"
                id="file"
                name="file"
              />
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
