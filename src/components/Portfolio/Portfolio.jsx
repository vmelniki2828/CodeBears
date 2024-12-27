import { BurgerIcon } from 'components/Welcome/Welcome.styled';
import {
  ArrowLinkPortfolio,
  GreenOverlay,
  ImageContainer,
  PortfolioContainer,
  PortfolioImageContainer,
  PortfolioImagesContainer,
  PortfolioLeftImage,
  PortfolioMainTitle,
  PortfolioRightImage,
  PortfolioSubTitle,
  TextOverlay,
} from './Portfolio.styled';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { BackArrow } from 'components/Services/Services.styled';
import screen_one from '../../image/screen_one.png';
import screen_two from '../../image/screen_two.png';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import WhiteArrow from '../../image/VectorWhite.svg';

const Portfolio = () => {
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню

  const onClickGood = () => {
    setSidebarSwitcher(prevState => !prevState); // Переключение состояния меню
  };

  useEffect(() => {
    // Устанавливаем начальное состояние меню (спрятано)
    gsap.set('.sideMenu', { x: '-100vw' });
  }, []);

  return (
    <PortfolioContainer>
      <BurgerIcon onClick={onClickGood} className="good" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackArrow />
      </NavLink>
      <SideBarMenu isOpen={sidebarSwitcher} />

      <PortfolioMainTitle>ПОРТФОЛІО</PortfolioMainTitle>

      <PortfolioImagesContainer>
        <PortfolioSubTitle>PROGRESSIVE WEB APPS</PortfolioSubTitle>
        <ImageContainer>
          <PortfolioImageContainer isLeft>
            <>
              <PortfolioLeftImage src={screen_one} />
              <GreenOverlay />
            </>
            <TextOverlay>
              CODEBEARS <ArrowLinkPortfolio src={WhiteArrow} />
            </TextOverlay>
          </PortfolioImageContainer>
          <PortfolioImageContainer>
            <>
              <PortfolioRightImage src={screen_two} />
              <GreenOverlay />
            </>
            <TextOverlay>
              KN.MYSTRN
              <ArrowLinkPortfolio src={WhiteArrow} />
            </TextOverlay>
          </PortfolioImageContainer>
        </ImageContainer>
      </PortfolioImagesContainer>
      <PortfolioImagesContainer>
        <PortfolioSubTitle>SMM</PortfolioSubTitle>
        <ImageContainer>
          <PortfolioImageContainer isLeft>
            <>
              <PortfolioLeftImage src={screen_one} />
              <GreenOverlay />
            </>
            <TextOverlay>
              CODEBEARS
              <ArrowLinkPortfolio src={WhiteArrow} />
            </TextOverlay>
          </PortfolioImageContainer>
          <PortfolioImageContainer>
            <>
              <PortfolioRightImage src={screen_two} />
              <GreenOverlay />
            </>
            <TextOverlay>
              KN.MYSTRN
              <ArrowLinkPortfolio src={WhiteArrow} />
            </TextOverlay>
          </PortfolioImageContainer>
        </ImageContainer>
      </PortfolioImagesContainer>
      <PortfolioImagesContainer>
        <PortfolioSubTitle>ВЕБ ДИЗАЙН</PortfolioSubTitle>
        <ImageContainer>
          <PortfolioImageContainer isLeft>
            <>
              <PortfolioLeftImage src={screen_one} />
              <GreenOverlay />
            </>
            <TextOverlay>
              CODEBEARS
              <ArrowLinkPortfolio src={WhiteArrow} />
            </TextOverlay>
          </PortfolioImageContainer>
          <PortfolioImageContainer>
            <>
              <PortfolioRightImage src={screen_two} />
              <GreenOverlay />
            </>
            <TextOverlay>
              KN.MYSTRN
              <ArrowLinkPortfolio src={WhiteArrow} />
            </TextOverlay>
          </PortfolioImageContainer>
        </ImageContainer>
      </PortfolioImagesContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
