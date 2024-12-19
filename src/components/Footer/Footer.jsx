import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Импортируем плагин ScrollTrigger
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
  // Регистрируем плагин ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Анимация для футера
  gsap.fromTo(
    FooterConteiner,
    {
      y: 100, // Начальное положение (футер начинается за пределами экрана, на 100px ниже)
      opacity: 0, // Начальная прозрачность
    },
    {
      y: 0, // Конечное положение (футер "выезжает" на свой обычный уровень)
      opacity: 1, // Футер становится видимым
      scrollTrigger: {
        trigger: FooterConteiner, // Элемент, при достижении которого анимация сработает
        start: 'top bottom', // Начать анимацию, когда верх футера достигнет нижней части экрана
        end: 'bottom top', // Закончить анимацию, когда нижняя часть футера выйдет за пределы экрана
        scrub: true, // Делает анимацию плавной
      },
    }
  );

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
