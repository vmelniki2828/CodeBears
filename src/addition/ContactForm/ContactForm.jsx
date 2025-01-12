import {
  ArrowContLink,
  ButtonsContainer,
  FileIcon,
  FileInputButton,
  Form,
  FormBlock,
  FormConteiner,
  InputField,
  MainText,
  Star,
  StarContainer,
  SubmitButton,
  SubText,
  TextAreaField,
  TextConteiner,
} from './ContactForm.styled';
import star from '../../image/Star.svg';
import AttachIcon from '../../image/Vector66.svg';
import Arrow from '../../image/Vector65.svg';
import { useEffect, useState } from 'react';
import gsap from 'gsap';

const ContactForm = ({ mainTitle, subTitle }) => {
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
  };

  useEffect(() => {
    // Устанавливаем начальное состояние меню (спрятано)
    gsap.to('.star', {
      rotation: '+=360', // Постоянное увеличение угла вращения
      duration: 5,
      repeat: -1, // Бесконечное повторение
      ease: 'linear', // Линейное движение
    });
  }, []);
  return (
    <>
      <StarContainer>
        <Star src={star} className="star" />
      </StarContainer>
      <FormBlock>
        <TextConteiner>
          <MainText>{mainTitle}</MainText>
          <SubText>{subTitle}</SubText>
        </TextConteiner>
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
              Надіслати
              <ArrowContLink src={Arrow} />
            </SubmitButton>
          </ButtonsContainer>
        </FormConteiner>
      </FormBlock>
    </>
  );
};

export default ContactForm;
