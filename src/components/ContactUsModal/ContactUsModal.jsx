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
} from './ContactUsModal.styled';
import { ArrowLink } from 'components/AboutUs/AboutUs.styled';

const ContactUsModal = ({ setModalVisible }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = e => {
    const { files } = e.target;
    setFormData({ ...formData, file: files[0] });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted Data:', formData);

    setModalVisible(false);
  };

  return (
    <>
      <ModalOverlay onClick={() => setModalVisible(false)} />
      <ContactUsModalConteiner>
        <TextModalConteiner>
          <MainModalText>ЗВ’ЯЖІТЬСЯ З НАМИ!</MainModalText>
          <TitleModalText>
            Залиште ваші данні та питання у формі зворотнього зв’язку
          </TitleModalText>
          <ModalText>
            Наша команда оперативно опрацює запит, щоб надати відповідь або
            запропонувати рішення. Ми зв’яжемося з клієнтом у найкоротші терміни
            через зазначений спосіб зв’язку для уточнення деталей або подальшої
            співпраці.
          </ModalText>
        </TextModalConteiner>
        <FormConteiner>
          <Form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="name"
              placeholder="Ваше ім’я"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              type="email"
              name="email"
              placeholder="Ваш email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextAreaField
              name="message"
              placeholder="Ваше повідомлення"
              value={formData.message}
              onChange={handleChange}
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
                onChange={handleFileChange}
              />
            </FileInputButton>

            <SubmitButton type="submit" onClick={handleSubmit}>
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
