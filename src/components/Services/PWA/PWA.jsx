import { BurgerIcon } from 'components/Welcome/Welcome.styled';
import {
  ArrowContLinkPWA,
  ArrowLinkPWA,
  ButtonsContainer,
  FileIcon,
  FileInputButton,
  Form,
  FormBlock,
  FormConteiner,
  InputField,
  MainPwaText,
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
  PwaTextForm,
  PWATextOverlay,
  SubmitButton,
  TextAreaField,
  TextPwaConteiner,
  TitlePwaText,
} from './PWA.styled';
import { BackArrow } from '../Services.styled';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import screen_one from '../../../image/screen_one.png';
import screen_two from '../../../image/screen_two.png';
import star from '../../../image/Star.svg';
import { NavLink } from 'react-router-dom';
import Arrow from '../../../image/Vector65.svg'
import AttachIcon from '../../../image/Vector66.svg';
import WhiteArrow from '../../../image/VectorWhite.svg'



const PWA = () => {
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню
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
          <PWATextOverlay>CODEBEARS <ArrowLinkPWA src={WhiteArrow}/></PWATextOverlay>
        </PWAImageContainer>
        <PWAImageContainer>
          <>
            <PWARightImage src={screen_two} />
            <PWAGreenOverlay />
          </>
          <PWATextOverlay>KN.MYSTRN <ArrowLinkPWA src={WhiteArrow}/></PWATextOverlay>
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
      <FormBlock>
        <TextPwaConteiner>
          <MainPwaText>ЗАЛИШИЛИСЬ ЗАПИТАННЯ?</MainPwaText>
          <TitlePwaText>
            Залиште ваші данні та питання у формі зворотнього зв’язку
          </TitlePwaText>
          <PwaTextForm>
            Наша команда оперативно опрацює запит, щоб надати відповідь або
            запропонувати рішення. Ми зв’яжемося з клієнтом у найкоротші терміни
            через зазначений спосіб зв’язку для уточнення деталей або подальшої
            співпраці.
          </PwaTextForm>
        </TextPwaConteiner>
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
                <FileIcon src={AttachIcon}/>
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
              <ArrowContLinkPWA src={Arrow}/>
            </SubmitButton>
          </ButtonsContainer>
        </FormConteiner>
      </FormBlock>
    </PWAContainer>
  );
};

export default PWA;
