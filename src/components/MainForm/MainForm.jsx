import React, { useEffect } from 'react';
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

  return (
    <FormContainer>
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
        <Form className="form">
          <Con>
            <InputLine type="text" />
            <InputLine type="text" />
            <TextArea type="text" />
          </Con>
          <ButtonGroup>
            <AttachButton><Attach alt='AttachIcon' src={AttachIcon} /></AttachButton>
            <SendButton>Надіслати</SendButton>
          </ButtonGroup>
        </Form>
      </FormWrap>
    </FormContainer>
  );
};

export default MainForm;
