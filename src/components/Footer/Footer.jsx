import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  AddressList,
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
    // Анимация для элементов футера
    gsap.fromTo(
      '.footer-link, .footer-cont-card-svg, .logo-text', // Выбираем все элементы, которые хотим анимировать
      { opacity: 0, y: 50 }, // Начальные значения (скрыты и смещены)
      {
        opacity: 1, // Конечное состояние (видимые и на месте)
        y: 0,
        duration: 0.5,
        stagger: 0.1, // Задержка между анимациями для каждого элемента
        scrollTrigger: {
          trigger: '.footer-container', // Прокручиваемый контейнер футера
          start: 'top 80%', // Когда футер достигнет 80% высоты экрана
          toggleActions: 'play none none none', // Действия на триггер
        },
      }
    );
  }, []);

  return (
    <FooterConteiner className="footer-container">
      <AddressList>
        <LinkList>
          <LinkItem>
            <FooterContCardSvg src={gmail} className="footer-cont-card-svg" />
            <FooterLink className="footer-link">codebear@gmail.com</FooterLink>
          </LinkItem>
          <LinkItem>
            <FooterContCardSvg src={inst} className="footer-cont-card-svg" />
            <FooterLink className="footer-link">@codebearit</FooterLink>
          </LinkItem>
          <LinkItem>
            <FooterContCardSvg src={contact} className="footer-cont-card-svg" />
            <FooterLink className="footer-link">@codebearmanager</FooterLink>
          </LinkItem>
        </LinkList>
      </AddressList>
      <LogoText className="logo-text">CODEBEAR.</LogoText>
      <LinkList>
        <LinkLegalInformationItem>
          <FooterLink className="footer-link">Terms&Condition</FooterLink>
        </LinkLegalInformationItem>
        <LinkLegalInformationItem>
          <FooterLink className="footer-link">Data security</FooterLink>
        </LinkLegalInformationItem>
        <LinkLegalInformationItem>
          <FooterLink className="footer-link">Privacy policy</FooterLink>
        </LinkLegalInformationItem>
      </LinkList>
    </FooterConteiner>
  );
};

export default Footer;
