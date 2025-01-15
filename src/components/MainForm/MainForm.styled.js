import styled from 'styled-components';
import AttachIcon from '../../image/Vector66.svg';
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1550px;

  background: radial-gradient(
      145.11% 101.78% at 50% 50%,
      #06050a 0%,
      #0f1924 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`;

export const FormTitle = styled.h2`
  width: 1262px;
  height: 302px;
  padding-top: 175px;
  font-family: 'Gunterz';
  font-style: normal;
  font-weight: 500;
  font-size: 103px;
  line-height: 100%;
  /* or 103px */
  text-align: right;
  margin: 0;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const FormWrap = styled.div`
  display: flex;
  padding-top: 150px;
`;

export const FormWrapText = styled.div`
  margin-right: 20px;
`;

export const Form = styled.form``;

export const FormText = styled.h2`
  width: 811px;
  margin: 0;
  font-family: 'Freigeist', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 103px;
  line-height: 85%;
  /* or 88px */

  /* іваіа */
  background: linear-gradient(123.73deg, #ffffff -44.77%, #45aeb1 302.21%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const FormText2 = styled.h3`
  width: 808px;
  height: 66px;
  margin: 0;
  font-family: 'Freigeist', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 86.5%;
  /* or 33px */
  letter-spacing: -0.02em;

  color: #ffffff;
  padding-top: 70px;
  padding-bottom: 40px;
`;

export const FormPar = styled.p`
  margin: 0;
  width: 663px;
  height: 184px;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 100;
  font-size: 32px;
  line-height: 86.5%;
  /* or 28px */
  letter-spacing: -0.02em;

  color: #ffffff;
`;

export const Con = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 469px;
  height: 404px;
  background: rgba(10, 10, 10, 0.69);
  backdrop-filter: blur(10.55px);
  border-radius: 20px;
  flex-direction: column;
  align-items: center;

  /* Градиентная рамка */
  position: relative;
  padding: 2px; /* Толщина рамки */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px; /* Скругление совпадает с контейнером */
    padding: 0.5px; /* Толщина рамки */
    background: linear-gradient(135deg, #666666, #000); /* Градиент рамки */
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }

  transition: all 0.3s ease;

  &:hover {
    border-color: #57ff9a;
    color: white;
    box-shadow: 0px 0px 10px #57ff9a;
  }
`;

export const InputLine = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
  color: #fff;
  font-size: 16px;
  margin-top: 50px;
  width: 360px;
  height: 20px;
  &:focus {
    border-bottom: 1px solid #00f5b3;
  }
`;

export const TextArea = styled.textarea`
  width: 396px;
  height: 155px;
  background: linear-gradient(99.81deg, #090a0c -15.86%, #131518 147.26%);
  border-radius: 20px;
  margin-top: 60px;
  color: #fff;
  outline: none;
  padding: 10px;
  resize: none;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const AttachButton = styled.button`
  border-radius: 50%;
  width: 99px;
  height: 99px;
  background: rgba(10, 10, 10, 0.69);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(102, 102, 102, 0.5), rgba(0, 0, 0, 0.5)); /* Тусклый градиент */
    padding: 0.5px; /* Толщина рамки */
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
    transition: background 0.3s ease; /* Плавный переход для градиента */
  }

  &:hover {
    box-shadow: 0px 0px 15px rgba(87, 255, 154, 0.8); /* Менее яркая тень */
    color: white;

    &::before {
      background: linear-gradient(135deg, rgba(87, 255, 154, 0.7), rgba(57, 200, 134, 0.7)); /* Плавный яркий градиент */
    }
  }
`;

export const SendButton = styled.button`
  width: 346px;
  height: 99px;
  // border: 1px solid grey;
  border-radius: 53px;
  color: #00f5b3;

  padding: 10px 20px;

  gap: 10px;
  cursor: pointer;
  backdrop-filter: blur(10.55px);

  display: flex;
  align-items: center;
  text-decoration: underline;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 33px;
  line-height: 41px;
  justify-content: center;
  background: rgba(10, 10, 10, 0.69);

  transition: all 0.3s ease;
  text-decoration: underline;
  text-decoration-thickness: 2px; /* Толщина линии подчеркивания */
  text-underline-offset: 7px; /* Отступ линии от текста */
  &:hover {
    border-color: #57ff9a;
    box-shadow: 0px 0px 10px #57ff9a;
  }


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius:  53px;
    background: linear-gradient(135deg, rgba(102, 102, 102, 0.5), rgba(0, 0, 0, 0.5)); /* Тусклый градиент */
    padding: 0.5px; /* Толщина рамки */
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
    transition: background 0.3s ease; /* Плавный переход для градиента */
  }
`;

export const Attach = styled.img`
  width: 19px;
  height: 36px;
`;
