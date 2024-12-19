import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

// Регистрируем ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Анимация для футера (выезжает снизу)
    gsap.fromTo(
      '.footer-container',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.footer-container',
          start: 'top 80%', // Анимация начинается, когда футер будет на 80% экрана
          toggleActions: 'play none none none',
        }
      }
    );
  }, []);

  return (
    <FooterConteiner className="footer-container">
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
