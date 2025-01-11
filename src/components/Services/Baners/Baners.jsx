import { BurgerIcon } from 'components/Welcome/Welcome.styled';
import {
  ArrowLinkBaners,
  BanersDefaultText,
  BanersFormatsText,
  BanersGreenOverlay,
  BanersImage,
  BanersImageContainer,
  BanersImagesContainer,
  BanersMainTitle,
  BanersPageContainer,
  BanersSubTitle,
  BanersTextOverlay,
} from './Baners.styled';
import { NavLink } from 'react-router-dom';
import { BackArrow } from '../Services.styled';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import { useState } from 'react';
import screen_one from '../../../image/screen_one.png';
import screen_two from '../../../image/screen_two.png';
import WhiteArrow from '../../../image/VectorWhite.svg';

const Baners = () => {
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню

  const onClickGood = () => {
    setSidebarSwitcher(prevState => !prevState); // Переключение состояния меню
  };

  return (
    <BanersPageContainer>
      <BurgerIcon onClick={onClickGood} className="good" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackArrow />
      </NavLink>
      <SideBarMenu isOpen={sidebarSwitcher} />
      <BanersMainTitle>Рекламні банери</BanersMainTitle>
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
    </BanersPageContainer>
  );
};

export default Baners;
