import { BurgerIcon } from 'components/Welcome/Welcome.styled';
import {
  AdaptContainer,
  AdvantagesList,
  AdvantagesListItem,
  ArrowLinkBaners,
  BanersDefaultText,
  BanersFormatsContainer,
  BanersFormatsContainerItem,
  BanersFormatsContainerItemImg,
  BanersFormatsContainerItemSubText,
  BanersFormatsContainerItemText,
  BanersFormatsText,
  BanersGreenOverlay,
  BanersImage,
  BanersImageContainer,
  BanersImagesContainer,
  BanersMainTitle,
  BanersPageContainer,
  BanersSubTitle,
  BanersTextOverlay,
  ExapmlesContainer,
  MainBannerContainer,
  PageContainer,
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
import { useState } from 'react';
import screen_one from '../../../image/screen_one.png';
import screen_two from '../../../image/screen_two.png';
import banner_one from '../../../image/banner_one.png';
import banner_two from '../../../image/banner_two.png';
import banner_tree from '../../../image/banner_tree.png';
import WhiteArrow from '../../../image/VectorWhite.svg';
import TwoExamplesBanners from '../../../addition/TwoExamplesBanners/TwoExamplesBanners';
import ServicesList from 'addition/ServicesList/ServicesList';
import ContactForm from 'addition/ContactForm/ContactForm';
import StarAndText from 'addition/StarAndText/StarAndText';

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

  return (
    <MainBannerContainer>
      <BurgerIcon onClick={onClickGood} className="good" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackArrow />
      </NavLink>
      <SideBarMenu isOpen={sidebarSwitcher} />
      <BanersPageContainer>
        <BanersMainTitle>Рекламні банери</BanersMainTitle>
        <TwoExamplesBanners />
        <BanersSubTitle>
          Що таке рекламні банери та їх призначення.
        </BanersSubTitle>
        <BanersDefaultText>
          Рекламні банери — це графічні об’єкти, що використовуються для
          привертання уваги клієнтів та просування брендів, товарів або послуг.
          Вони спрямовані на виконання певних завдань, таких як збільшення
          продажів, формування позитивного іміджу та залучення нових клієнтів.
        </BanersDefaultText>
        <BanersFormatsText>Основні формати:</BanersFormatsText>
        <BanersFormatsContainer>
          <BanersFormatsContainerItem>
            <BanersFormatsContainerItemText>
              Онлайн банери
            </BanersFormatsContainerItemText>
            <BanersFormatsContainerItemImg src={banner_one} alt="banner_one" />
            <BanersFormatsContainerItemSubText>
              для сайтів / соцмереж / додатків.
            </BanersFormatsContainerItemSubText>
          </BanersFormatsContainerItem>
          <BanersFormatsContainerItem>
            <BanersFormatsContainerItemText>
              Офлайн банери
            </BanersFormatsContainerItemText>
            <BanersFormatsContainerItemImg src={banner_two} alt="banner_two" />
            <BanersFormatsContainerItemSubText>
              зовнішня реклама (білборди, брендмауери).
            </BanersFormatsContainerItemSubText>
          </BanersFormatsContainerItem>
        </BanersFormatsContainer>
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
