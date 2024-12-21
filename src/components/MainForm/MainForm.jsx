import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FormContainer,
  FormTitle,
  FormWrap,
  FormWrapText,
  Form,
  FormText,
  FormText2,
  FormPar,
  Con,
  InputLine,
  TextArea,
  ButtonGroup,
  AttachButton,
  SendButton,
  Attach,
} from './MainForm.styled';
import AttachIcon from '../../image/Vector66.svg';

// Регистрируем ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const MainForm = () => {
  useEffect(() => {
    // Анимация для FormTitle (запускается сверху)
    gsap.fromTo(
      '.form-title',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '.form-title',
          start: 'top 50%',
          toggleActions: 'play none none none',
        }
      }
    );

    // Анимация для текста
    gsap.fromTo(
      '.form-text',
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.form-text',
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );

    // Анимация для формы
    gsap.fromTo(
      '.form',
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.form',
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send', formData);
      alert("Дякуюємо за заявку! Скоро з вами зв`яжуться наші менеджери!");
    } catch (error) {
      console.log(error);
      alert('Упс! Щось пішло не так! 😢');
    }

    setFormData({
      name: '',
      contact: '',
    });
  };
  return (
    <FormContainer id='contact'>
      <FormTitle className="form-title">
        ДАВАЙТЕ <br /> СТВОРИМО <br />
        ЩОСЬ ПРЕКРАСНЕ.
      </FormTitle>
      <FormWrap>
        <FormWrapText className="form-text">
          <FormText>
            ВСЕ З ЧОГОСЬ ПОЧИНАЄТЬСЯ <br />
          </FormText>
          <FormText2>
            Залиште ваші данні та коментарі до проекту у формі зворотнього
            зв’язку
          </FormText2>
          <FormPar>
            Наша команда оперативно опрацює запит, щоб надати відповідь або
            запропонувати рішення. Ми зв’яжемося з вами у найкоротші терміни
            через зазначений спосіб зв’язку для уточнення деталей або подальшої
            співпраці.
          </FormPar>
        </FormWrapText>
        <Form className="form" onSubmit={handleSubmit}>
          <Con>
            <InputLine type="text" name="name" value={formData.name} onChange={handleChange} />
            <InputLine type="text" name="contact" value={formData.contact} onChange={handleChange} />
            <TextArea type="text" />
          </Con>
          <ButtonGroup>
            <AttachButton><Attach alt='AttachIcon' src={AttachIcon} /></AttachButton>
            <SendButton type="submit">Надіслати</SendButton>
          </ButtonGroup>
        </Form>
      </FormWrap>
    </FormContainer>
  );
};

export default MainForm;
