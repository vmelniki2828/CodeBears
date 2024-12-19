import {
  FooterContCardSvg,
  FooterConteiner,
  FooterLink,
  LinkItem,
  LinkLegalInformationItem,
  LinkList,
  LogoText,
} from './Footer.styled';
import inst from '../../image/svgInst.svg';
import gmail from '../../image/svgGmail.svg';
import contact from '../../image/svgCotact.svg';

const Footer = () => {
  return (
    <FooterConteiner>
      <LinkList>
        <LinkItem>
          <FooterContCardSvg src={gmail} />
          <FooterLink>codebear@gmail.com</FooterLink>
        </LinkItem>
        <LinkItem>
          <FooterContCardSvg src={inst} />
          <FooterLink>@codebearit</FooterLink>
        </LinkItem>
        <LinkItem>
          <FooterContCardSvg src={contact} />
          <FooterLink>@codebearmanager</FooterLink>
        </LinkItem>
      </LinkList>
      <LogoText>CODEBEAR.</LogoText>
      <LinkList>
        <LinkLegalInformationItem>
          <FooterLink>Terms&Condition</FooterLink>
        </LinkLegalInformationItem>
        <LinkLegalInformationItem>
          <FooterLink>Data security</FooterLink>
        </LinkLegalInformationItem>
        <LinkLegalInformationItem>
          <FooterLink>Privacy policy</FooterLink>
        </LinkLegalInformationItem>
      </LinkList>
    </FooterConteiner>
  );
};

export default Footer;
