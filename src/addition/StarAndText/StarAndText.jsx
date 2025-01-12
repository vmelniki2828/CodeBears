import {
  StarAndTextContainer,
  StarImg,
  StarImgContainer,
  Text,
} from './StarAndText.styled';
import star from '../../image/smallStar.png';

const StarAndText = ({ text }) => {
  return (
    <StarAndTextContainer>
      <StarImgContainer>
        <StarImg src={star} className="star" />
      </StarImgContainer>
      <Text>{text} </Text>
    </StarAndTextContainer>
  );
};

export default StarAndText;
