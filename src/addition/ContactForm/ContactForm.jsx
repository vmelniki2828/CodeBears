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
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = ({ mainTitle, subTitle }) => {
  const textRef = useRef(null);
  const formRef = useRef(null);

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
    // Анимация вращения звезды
    gsap.to('.star', {
      rotation: '+=360',
      duration: 5,
      repeat: -1,
      ease: 'linear',
    });

    // Анимация текста с использованием ScrollTrigger
    gsap.fromTo(
      textRef.current,
      { x: '-100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%', // Начинает анимацию, когда верх элемента достигает 80% окна
        },
      }
    );

    // Анимация формы с использованием ScrollTrigger
    gsap.fromTo(
      formRef.current,
      { x: '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%', // Начинает анимацию, когда верх элемента достигает 80% окна
        },
      }
    );
  }, []);

  return (
    <>
      <StarContainer>
        <Star src={star} className="star" />
      </StarContainer>
      <FormBlock>
        <TextConteiner ref={textRef}>
          <MainText>{mainTitle}</MainText>
          <SubText>{subTitle}</SubText>
        </TextConteiner>
        <FormConteiner ref={formRef}>
          <Form>
            <InputField
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <InputField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextAreaField
              name="message"
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
