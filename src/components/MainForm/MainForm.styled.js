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

export const FormWrapText = styled.div``;

export const Form = styled.div``;

export const FormText = styled.h2`
  width: 811px;
  height: 173px;
  margin: 0;
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
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
  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
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
  font-weight: 400;
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
  border: 1px solid grey;
`;

export const InputLine = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #52525b;
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
  outline: none;
  padding: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const AttachButton = styled.button`
  background: none;
  border: 1px solid grey;
  border-radius: 50%;
  width: 99px;
  height: 99px;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
  }
`;

export const SendButton = styled.button`
  width: 346px;
  height: 99px;
  border: 1px solid grey;
  border-radius: 53px;
  color: #00f5b3;

  padding: 10px 20px;

  gap: 10px;
  cursor: pointer;
  backdrop-filter: blur(10.55px);

  font-family: 'Freigeist';
  font-style: normal;
  font-weight: 400;
  font-size: 33px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;

  background: linear-gradient(92.08deg, #57ff9a 0.95%, #57ffdd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  &:hover {
    background-color: #00f5b3;
    color: #000;
  }
`;

export const Attach = styled.img`
  width: 19px;
  height: 36px;
`;
