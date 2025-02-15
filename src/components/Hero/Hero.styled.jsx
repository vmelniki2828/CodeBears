import styled from 'styled-components';

export const HeroContainer = styled.section `
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
    padding-bottom: 140px;
  `;   
  

export const HeroMainText = styled.p`
    font-family: 'Gunterz', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 87px;
    line-height: 100%;
    margin: 150px 0 50px 0;
    background: linear-gradient(123.73deg, #ffffff -44.77%, #45aeb1 302.21%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    padding-top:20px;

    text-shadow: 0px 0px 19.3px rgba(87, 255, 154, 0.2),
      0px 0px 71.9px rgba(69, 174, 177, 0.42);
  `;

export const HeroSubText = styled.p`
    font-family: 'Freigeist', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 37px;
    text-align: center;
    color: #ffffff;
    width: 600px;
    margin: 50px 0 0 0;
  `;

// export const MoonImg = styled.img`
//     filter: drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.5));
//   `;

export const StartContainer = styled.div`
    display: flex;
    align-items: center;
  `;

export const StarImg = styled.img``;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 100px;
    margin-top: 80px;
    position:relative;
z-index:2;
  `;

export const ButtonItem = styled.button`
    width: 287px;
    height: 72px;
    border-color: #57ff9a;
    background: #0f1924;
    border-radius: 58px;
    text-align: center;
    font-family: 'Freigeist', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 37px;
    color: #57ff9a;
    cursor: pointer;
    transition: all 0.3s ease; /* Добавляем общую анимацию для всех свойств */

    &:hover {
      color: white; /* Меняем цвет текста при наведении */
      box-shadow: 0px 0px 10px #57ff9a; /* Добавляем тень для эффекта свечения */
    }
  `;
