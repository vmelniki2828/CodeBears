import { BurgerIcon } from 'components/Welcome/Welcome.styled';
import {
  AdaptContainer,
  AdvantagesList,
  AdvantagesListItem,
  BanersDefaultText,
  BanersFormatsContainer,
  BanersFormatsContainerItem,
  BanersFormatsContainerItemImg,
  BanersFormatsContainerItemSubText,
  BanersFormatsContainerItemText,
  BanersFormatsText,
  BanersMainTitle,
  BanersPageContainer,
  BanersSubTitle,
  ExapmlesContainer,
  MainBannerContainer,
  TypeMainContainer,
  TypeSubContainer,
  TypeSubContainerImage,
  TypeSubContainerSubText,
  TypeSubContainerText,
  WhyWeMainText,
  WhyWeSubText,
} from './Baners.styled';
import { NavLink } from 'react-router-dom';
import { BackArrow } from '../Services.styled';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import { useEffect, useRef, useState } from 'react';
import banner_one from '../../../image/banner_one.png';
import banner_two from '../../../image/banner_two.png';
import banner_tree from '../../../image/banner_tree.png';
import TwoExamplesBanners from '../../../addition/TwoExamplesBanners/TwoExamplesBanners';
import ServicesList from 'addition/ServicesList/ServicesList';
import ContactForm from 'addition/ContactForm/ContactForm';
import StarAndText from 'addition/StarAndText/StarAndText';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Baners = () => {
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню

  const onClickGood = () => {
    setSidebarSwitcher(prevState => !prevState); // Переключение состояния меню
  };

  const firstList = [
    'Привертання уваги та підвищення впізнаваності бренду.',
    'Точний таргетинг: застосування банерів для онлайн реклами дозволяє досягти саме вашої цільової аудиторії.',
    'Гнучкий дизайн: призначення для різних цілей (акції, події, продажі).',
    'Ефективність: рекламні банери для реклами товарів швидко доносять інформацію до користувачів.',
  ];

  const secondList = [
    'Розробка унікального дизайну банерів "під ключ".',
    'Адаптація банерів для різних платформ (соцмережі, сайти, Google Ads).',
    'Верстка та підготовка до публікації чи друку.',
    'Консультації зі вибору форматів, розмірів та ефективного розміщення.',
  ];

  const whyWeList = [
    'Використовуємо унікальний дизайн банерів, адаптуючи їх до ваших потреб.',
    'Розробляємо адаптивні банери, які ефективно працюють на всіх платформах.',
    'Наша команда спеціалізується на створенні креативних банерів, що привертають увагу та підвищують конверсії.',
    'Не гайте часу — замовте рекламний банер вже сьогодні!',
  ];

  const mainTitleRef = useRef(null);
  const subTitleRefs = useRef([]);
  const formatItemRefs = useRef([]);
  const examplesBannersRef = useRef(null);
  const textBlockRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Анимация главного заголовка
    gsap.fromTo(
      mainTitleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    // Анимация подзаголовков
    subTitleRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });

    // Анимация текстовых блоков
    textBlockRefs.current.forEach(el => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });

    // Анимация элементов форматов
    formatItemRefs.current.forEach(el => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });

    // Анимация блока TwoExamplesBanners
    gsap.fromTo(
      examplesBannersRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: examplesBannersRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <MainBannerContainer>
      <BurgerIcon onClick={onClickGood} className="good" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackArrow />
      </NavLink>
      <SideBarMenu isOpen={sidebarSwitcher} />
      <BanersPageContainer>
        <BanersMainTitle ref={mainTitleRef}>Рекламні банери</BanersMainTitle>
        <div ref={examplesBannersRef}>
          <TwoExamplesBanners />
        </div>
        <BanersSubTitle ref={el => (subTitleRefs.current[0] = el)}>
          Що таке рекламні банери та їх призначення.
        </BanersSubTitle>
        <BanersDefaultText ref={el => textBlockRefs.current.push(el)}>
          Рекламні банери — це графічні об’єкти, що використовуються для
          привертання уваги клієнтів та просування брендів, товарів або послуг.
          Вони спрямовані на виконання певних завдань, таких як збільшення
          продажів, формування позитивного іміджу та залучення нових клієнтів.
        </BanersDefaultText>
        <BanersFormatsText ref={el => (subTitleRefs.current[1] = el)}>
          Основні формати:
        </BanersFormatsText>
        <div ref={examplesBannersRef}>
          <BanersFormatsContainer>
            <BanersFormatsContainerItem>
              <BanersFormatsContainerItemText>
                Онлайн банери
              </BanersFormatsContainerItemText>
              <BanersFormatsContainerItemImg
                src={banner_one}
                alt="banner_one"
              />
              <BanersFormatsContainerItemSubText>
                для сайтів / соцмереж / додатків.
              </BanersFormatsContainerItemSubText>
            </BanersFormatsContainerItem>
            <BanersFormatsContainerItem>
              <BanersFormatsContainerItemText>
                Офлайн банери
              </BanersFormatsContainerItemText>
              <BanersFormatsContainerItemImg
                src={banner_two}
                alt="banner_two"
              />
              <BanersFormatsContainerItemSubText>
                зовнішня реклама (білборди, брендмауери).
              </BanersFormatsContainerItemSubText>
            </BanersFormatsContainerItem>
          </BanersFormatsContainer>
        </div>
        <ServicesList
          title={'Переваги використання рекламних банерів'}
          data={firstList}
        />
        <BanersSubTitle>Види рекламних банерів</BanersSubTitle>
        <TypeMainContainer>
          <TypeSubContainer>
            <TypeSubContainerText>Статичні</TypeSubContainerText>
            <TypeSubContainerSubText>
              зображення з текстом.
            </TypeSubContainerSubText>
            <TypeSubContainerImage>
              <img src={banner_tree} alt="banner_tree" />
            </TypeSubContainerImage>
          </TypeSubContainer>
          <TypeSubContainer>
            <TypeSubContainerText>Анімовані</TypeSubContainerText>
            <TypeSubContainerSubText>GIF, HTML5. </TypeSubContainerSubText>
            <TypeSubContainerImage>
              <img src={banner_tree} alt="banner_tree" />
            </TypeSubContainerImage>{' '}
          </TypeSubContainer>
          <TypeSubContainer>
            <TypeSubContainerText>Відео-банери</TypeSubContainerText>
            <TypeSubContainerSubText>
              привертають більше уваги завдяки динаміці.
            </TypeSubContainerSubText>
            <TypeSubContainerImage>
              <img src={banner_tree} alt="banner_tree" />
            </TypeSubContainerImage>{' '}
          </TypeSubContainer>
        </TypeMainContainer>
        <ServicesList title={'Наші послуги'} data={secondList} />

        <BanersSubTitle>Наші роботи та кейси</BanersSubTitle>
        <AdvantagesList>
          <AdvantagesListItem>
            Розробка унікального дизайну банерів "під ключ".
          </AdvantagesListItem>
          <ExapmlesContainer>
            <TwoExamplesBanners />

            <TwoExamplesBanners />
          </ExapmlesContainer>
          <AdvantagesListItem>
            Адаптація банерів для різних платформ (соцмережі, сайти, Google
            Ads).
          </AdvantagesListItem>
          <AdaptContainer>
            <TwoExamplesBanners />
          </AdaptContainer>
        </AdvantagesList>
        <ContactForm
          mainTitle={'Замовте рекламні банери вже зараз!'}
          subTitle={
            'Потрібні банери для бізнесу? Залишайте заявку для консультації та додаткових деталей. Ми створимо професійні банери, що спрацюють на ваш успіх!'
          }
        />

        <WhyWeMainText>Чому варто обрати нас?</WhyWeMainText>
        <WhyWeSubText>
          Ми пропонуємо банери для бізнесу, включаючи банери для малого бізнесу.
          Наші професійні банери підходять для будь-якої цільової аудиторії.
        </WhyWeSubText>
        {whyWeList.map(item => {
          return <StarAndText text={item} />;
        })}
      </BanersPageContainer>
    </MainBannerContainer>
  );
};

export default Baners;
