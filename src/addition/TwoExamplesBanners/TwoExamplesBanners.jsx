import { ArrowLink, GreenOverlay, Image, ImageContainer, MainContainer, TextOverlay } from "./TwoExamplesBanners.styled";
import screen_one from '../../image/screen_one.png';
import screen_two from '../../image/screen_two.png';
import WhiteArrow from '../../image/VectorWhite.svg';


const TwoExamplesBanners = () => {
  return (
    <MainContainer>
      <ImageContainer isLeft>
        <>
          <Image src={screen_one} />
          <GreenOverlay />
        </>
        <TextOverlay>
          CODEBEARS <ArrowLink src={WhiteArrow} />
        </TextOverlay>
      </ImageContainer>
      <ImageContainer>
        <>
          <Image src={screen_two} />
          <GreenOverlay />
        </>
        <TextOverlay>
          KN.MYSTRN <ArrowLink src={WhiteArrow} />
        </TextOverlay>
      </ImageContainer>
    </MainContainer>
  );
};

export default TwoExamplesBanners;