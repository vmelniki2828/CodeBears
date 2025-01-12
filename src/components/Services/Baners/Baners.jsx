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

const Baners = () => {
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню

  const onClickGood = () => {
    setSidebarSwitcher(prevState => !prevState); // Переключение состояния меню
  };

  return (
    <MainBannerContainer>
      <BurgerIcon onClick={onClickGood} className="good" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackArrow />
      </NavLink>
      <SideBarMenu isOpen={sidebarSwitcher} />
      <BanersPageContainer>

        <BanersMainTitle>Рекламні банери</BanersMainTitle>
        <TwoExamplesBanners/>
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
        <BanersSubTitle>Переваги використання рекламних банерів </BanersSubTitle>
        <AdvantagesList>
          <AdvantagesListItem>
            Привертання уваги та підвищення впізнаваності бренду.
          </AdvantagesListItem>
          <AdvantagesListItem>
            Точний таргетинг: застосування банерів для онлайн реклами дозволяє
            досягти саме вашої цільової аудиторії.
          </AdvantagesListItem>
          <AdvantagesListItem>
            Гнучкий дизайн: призначення для різних цілей (акції, події, продажі).
          </AdvantagesListItem>
          <AdvantagesListItem>
            Ефективність: рекламні банери для реклами товарів швидко доносять
            інформацію до користувачів.
          </AdvantagesListItem>
        </AdvantagesList>
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
        <BanersSubTitle>Наші послуги</BanersSubTitle>
        <AdvantagesList>
          <AdvantagesListItem>
            Розробка унікального дизайну банерів "під ключ".
          </AdvantagesListItem>
          <AdvantagesListItem>
            Адаптація банерів для різних платформ (соцмережі, сайти, Google Ads).
          </AdvantagesListItem>
          <AdvantagesListItem>
            Верстка та підготовка до публікації чи друку.
          </AdvantagesListItem>
          <AdvantagesListItem>
            Консультації зі вибору форматів, розмірів та ефективного розміщення.
          </AdvantagesListItem>
        </AdvantagesList>
        <BanersSubTitle>Наші послуги</BanersSubTitle>
        <AdvantagesList>
          <AdvantagesListItem>
            Розробка унікального дизайну банерів "під ключ".
          </AdvantagesListItem>
          <ExapmlesContainer>
            <BanersImagesContainer>
              <BanersImageContainer isLeft>
                <>
                  <BanersImage src={screen_one} />
                  <BanersGreenOverlay />
                </>
                <BanersTextOverlay>
                  CODEBEARS <ArrowLinkBaners src={WhiteArrow} />
                </BanersTextOverlay>
              </BanersImageContainer>
              <BanersImageContainer>
                <>
                  <BanersImage src={screen_two} />
                  <BanersGreenOverlay />
                </>
                <BanersTextOverlay>
                  KN.MYSTRN <ArrowLinkBaners src={WhiteArrow} />
                </BanersTextOverlay>
              </BanersImageContainer>
            </BanersImagesContainer>
            <BanersImagesContainer>
              <BanersImageContainer isLeft>
                <>
                  <BanersImage src={screen_one} />
                  <BanersGreenOverlay />
                </>
                <BanersTextOverlay>
                  CODEBEARS <ArrowLinkBaners src={WhiteArrow} />
                </BanersTextOverlay>
              </BanersImageContainer>
              <BanersImageContainer>
                <>
                  <BanersImage src={screen_two} />
                  <BanersGreenOverlay />
                </>
                <BanersTextOverlay>
                  KN.MYSTRN <ArrowLinkBaners src={WhiteArrow} />
                </BanersTextOverlay>
              </BanersImageContainer>
            </BanersImagesContainer>
          </ExapmlesContainer>
          <AdvantagesListItem>
            Адаптація банерів для різних платформ (соцмережі, сайти, Google Ads).
          </AdvantagesListItem>
          <AdaptContainer>
            <BanersImagesContainer>
              <BanersImageContainer isLeft>
                <>
                  <BanersImage src={screen_one} />
                  <BanersGreenOverlay />
                </>
                <BanersTextOverlay>
                  CODEBEARS <ArrowLinkBaners src={WhiteArrow} />
                </BanersTextOverlay>
              </BanersImageContainer>
              <BanersImageContainer>
                <>
                  <BanersImage src={screen_two} />
                  <BanersGreenOverlay />
                </>
                <BanersTextOverlay>
                  KN.MYSTRN <ArrowLinkBaners src={WhiteArrow} />
                </BanersTextOverlay>
              </BanersImageContainer>
            </BanersImagesContainer>
          </AdaptContainer>
        </AdvantagesList>
      </BanersPageContainer>
    </MainBannerContainer>
  );
};

export default Baners;
