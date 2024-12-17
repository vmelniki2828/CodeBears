import styled from 'styled-components';
import group from '../../image/Group76.png';



export const GalleryContainer = styled.div`
height:845px;
width: 100%;
z-index: 999;
  background-image: url(${group});
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: center; 
  position: relative;
`;

export const GalleryMoon = styled.img`

position: absolute;
width: 1182px;
height: 1182px;
left: -640px;
filter: drop-shadow(84px 4px 176.7px #121621);
transform: rotate(29.77deg);

`;

