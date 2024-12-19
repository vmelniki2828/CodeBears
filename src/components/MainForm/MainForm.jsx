import {
  FormContainer,
  FormTitle,
  FormWrap,
  FormWrapText,
  Form,
  FormText,
  FormText2,
  FormPar,
  Con,
  InputLine,
  TextArea,
  ButtonGroup,
  AttachButton,
  SendButton,
  Attach,
} from './MainForm.styled';
import AttachIcon from '../../image/Vector66.svg'
const MainForm = () => {
  return (
    <FormContainer>
      <FormTitle>
        ДАВАЙТЕ <br /> СТВОРИМО <br />
        ЩОСЬ ПРЕКРАСНЕ.
      </FormTitle>
      <FormWrap>
        <FormWrapText>
          <FormText>
            ВСЕ З ЧОГОСЬ ПОЧИНАЄТЬСЯ <br />
          </FormText>
          <FormText2>
            Залиште ваші данні та коментарі до проекту у формі зворотнього
            зв’язку
          </FormText2>
          <FormPar>
            Наша команда оперативно опрацює запит, щоб надати відповідь або
            запропонувати рішення. Ми зв’яжемося з вами у найкоротші терміни
            через зазначений спосіб зв’язку для уточнення деталей або подальшої
            співпраці.
          </FormPar>
        </FormWrapText>
        <Form>
          <Con>
            <InputLine type="text" />
            <InputLine type="text" />
            <TextArea type="text" />
          </Con>
          <ButtonGroup>
            <AttachButton><Attach alt='AttachIcon' src={AttachIcon} /></AttachButton>
            <SendButton>Надіслати</SendButton>
          </ButtonGroup>
        </Form>
      </FormWrap>
    </FormContainer>
  );
};

export default MainForm;
