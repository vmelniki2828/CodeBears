import styled from 'styled-components';
import { FiArrowUpLeft } from "react-icons/fi";


export const ServicesContainer = styled.div`
background: radial-gradient(145.11% 101.78% at 50% 50%, #06050A 0%, #0F1924 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
width:100%;
height:500px;
`

export const BackArrow = styled(FiArrowUpLeft)`
  width: 25px;
  height: 25px;
  margin: 30px 0 0 63px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease; /* Плавный переход для всех изменяемых свойств */
  position: fixed;
  z-index: 999;

  &:hover {
    color: #949494;
  }
`;

export const ServicesMainContainer = styled.div`
  padding: 120px 100px 150px 100px;
  color: #fff;
`