import { BurgerIcon } from 'components/Welcome/Welcome.styled';
import {
  PWAContainer,
  PWAGreenOverlay,
  PWAImageContainer,
  PWAImagesContainer,
  PWALeftImage,
  PWAMainTitle,
  PWARightImage,
  PWAStarContainer,
  PWAStarImg,
  PWASubTItle,
  PWAText,
  PWATextOverlay,
} from './PWA.styled';
import { Form, NavLink } from 'react-router-dom';
import { BackArrow } from '../Services.styled';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import screen_one from '../../../image/screen_one.png';
import screen_two from '../../../image/screen_two.png';
import star from '../../../image/Star.svg';
import { Attach, AttachButton, ButtonGroup, Con, FormPar, FormText, FormText2, FormWrap, FormWrapText, InputLine, SendButton, TextArea } from 'components/MainForm/MainForm.styled';
import AttachIcon from '../../../image/Vector66.svg';
import axios from 'axios';

const PWA = () => {
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню

  const onClickGood = () => {
    setSidebarSwitcher(prevState => !prevState); // Переключение состояния меню
  };

  useEffect(() => {
    // Устанавливаем начальное состояние меню (спрятано)
    gsap.set('.sideMenu', { x: '-100vw' });
    gsap.to('.star', {
      rotation: '+=360', // Постоянное увеличение угла вращения
      duration: 5,
      repeat: -1, // Бесконечное повторение
      ease: 'linear', // Линейное движение
    });
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
    <PWAContainer>
      <BurgerIcon onClick={onClickGood} className="good" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackArrow />
      </NavLink>
      <SideBarMenu isOpen={sidebarSwitcher} />

      <PWAMainTitle>PIWA</PWAMainTitle>
      <PWASubTItle>PROGRESSIVE INCREDIBLE WEB APPS</PWASubTItle>

      <PWAImagesContainer>
        <PWAImageContainer isLeft>
          <>
            <PWALeftImage src={screen_one} />
            <PWAGreenOverlay />
          </>
          <PWATextOverlay>CODEBEARS</PWATextOverlay>
        </PWAImageContainer>
        <PWAImageContainer>
          <>
            <PWARightImage src={screen_two} />
            <PWAGreenOverlay />
          </>
          <PWATextOverlay>KN.MYSTRN</PWATextOverlay>
        </PWAImageContainer>
      </PWAImagesContainer>

      <PWAText>
        Progressive Web Apps (PWA) — це веб-додатки, які поєднують найкращі
        властивості вебсайтів та мобільних додатків. Вони швидко завантажуються,
        працюють навіть без підключення до Інтернету, та забезпечують зручність
        використання завдяки адаптивному дизайну. Наша компанія володіє
        глибокими знаннями у створенні PWA, завдяки чому ми здатні розробляти
        сучасні, ефективні та зручні рішення, які задовольнять потреби ваших
        користувачів і покращать їхній досвід. Ми знаємо, як використовувати
        інноваційні технології, щоб ваш бізнес отримав конкурентні переваги.
      </PWAText>
      <PWAStarContainer>
        <PWAStarImg src={star} className="star" />
      </PWAStarContainer>
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
            <InputLine
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputLine
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
            <TextArea type="text" />
          </Con>
          <ButtonGroup>
            <AttachButton>
              <Attach alt="AttachIcon" src={AttachIcon} />
            </AttachButton>
            <SendButton type="submit">Надіслати</SendButton>
          </ButtonGroup>
        </Form>
      </FormWrap>
    </PWAContainer>
  );
};

export default PWA;
