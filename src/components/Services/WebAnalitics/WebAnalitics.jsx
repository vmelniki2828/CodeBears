import { BurgerIcon } from 'components/Welcome/Welcome.styled';
import {
  MainWebAnaliticsContainer,
  WebAnaliticsDefaultText,
  WebAnaliticsMainTitle,
  WebAnaliticsPageContainer,
  WebAnaliticsSubTitle,
} from './WebAnalitics.styled';
import { NavLink } from 'react-router-dom';
import { BackArrow } from '../Services.styled';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import { useState } from 'react';
import TwoExamplesBanners from 'addition/TwoExamplesBanners/TwoExamplesBanners';

const WebAnalitics = () => {
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню

  const onClickGood = () => {
    setSidebarSwitcher(prevState => !prevState); // Переключение состояния меню
  };

  return (
    <MainWebAnaliticsContainer>
      <BurgerIcon onClick={onClickGood} className="good" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackArrow />
      </NavLink>
      <SideBarMenu isOpen={sidebarSwitcher} />
      <WebAnaliticsPageContainer>
        <WebAnaliticsMainTitle>
          Веб-аналітика: ефективний інструмент для розвитку бізнесу
        </WebAnaliticsMainTitle>
        <WebAnaliticsDefaultText>
          В епоху цифрових технологій <strong>веб аналітика</strong> набуває
          особливого значення для компаній, що прагнуть збільшити впізнаваність
          бренду та підвищити продажі. Вона дає змогу отримати детальну
          інформацію про дії відвідувачів, удосконалити маркетингові стратегії
          та зрозуміти, що саме впливає на прибутковість. Але{' '}
          <strong>веб аналітика це</strong> не просто збирання статистики — це
          повноцінний процес, який охоплює <strong>аналіз даних</strong>,{' '}
          <strong>аналіз веб сайту</strong>, а також{' '}
          <strong>seo оптимізація</strong> та вдосконалення користувацького
          досвіду.
        </WebAnaliticsDefaultText>
        <TwoExamplesBanners/>
        <WebAnaliticsSubTitle>Що таке веб-аналітика?</WebAnaliticsSubTitle>
      </WebAnaliticsPageContainer>
    </MainWebAnaliticsContainer>
  );
};

export default WebAnalitics;
