import { BurgerIcon } from 'components/Welcome/Welcome.styled';
import {
  AdaptContainer,
  AdvantagesList,
  AdvantagesListItem,
  BanersDefaultText,
  BanersFormatsContainer,
  BanersFormatsContainerItem,
  BanersFormatsContainerItemImg,
  BanersFormatsContainerItemSubText,
  BanersFormatsContainerItemText,
  BanersFormatsText,
  BanersMainTitle,
  BanersPageContainer,
  BanersSubTitle,
  ExapmlesContainer,
  ListWrapper,
  MainBannerContainer,
  SectionItemBlock,
  TypeMainContainer,
  TypeSubContainer,
  TypeSubContainerImage,
  TypeSubContainerSubText,
  TypeSubContainerText,
  WhyWeMainText,
  WhyWeSubText,
  WhyWeWrapper,
} from './Baners.styled';
import { NavLink } from 'react-router-dom';
import { BackArrow } from '../Services.styled';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import { useEffect, useRef, useState } from 'react';
import banner_one from '../../../image/banner_one.png';
import banner_two from '../../../image/banner_two.png';
import banner_tree from '../../../image/banner_tree.png';
import TwoExamplesBanners from '../../../addition/TwoExamplesBanners/TwoExamplesBanners';
import ServicesList from 'addition/ServicesList/ServicesList';
import ContactForm from 'addition/ContactForm/ContactForm';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Baners = () => {
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню
  const leftTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const imageRefs = useRef([]);
  const wrapperRef = useRef(null);
  const textRef = useRef(null);

  // Переключение состояния меню
  const onClickGood = () => {
    setSidebarSwitcher(prevState => !prevState);
  };

  useEffect(() => {
    const chars = textRef.current.textContent.split('');
    textRef.current.textContent = '';
    chars.forEach((char, index) => {
      setTimeout(() => {
        textRef.current.textContent += char;
      }, index * 70);
    });

    gsap.registerPlugin(ScrollTrigger);

    imageRefs.current.forEach(image => {
      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.8, y: 100 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1,
            once: true,
          },
        }
      );
    });

    gsap.fromTo(
      leftTextRef.current,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: leftTextRef.current,
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
          once: true,
        },
      }
    );

    gsap.fromTo(
      secondTextRef.current,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: secondTextRef.current,
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
          once: true,
        },
      }
    );

    gsap.fromTo(
      wrapperRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const firstList = [
    'Привертання уваги та підвищення впізнаваності бренду.',
    'Точний таргетинг: застосування банерів для онлайн реклами дозволяє досягти саме вашої цільової аудиторії.',
    'Гнучкий дизайн: призначення для різних цілей (акції, події, продажі).',
    'Ефективність: рекламні банери для реклами товарів швидко доносять інформацію до користувачів.',
  ];

  const secondList = [
    'Розробка унікального дизайну банерів "під ключ".',
    'Адаптація банерів для різних платформ (соцмережі, сайти, Google Ads).',
    'Верстка та підготовка до публікації чи друку.',
    'Консультації зі вибору форматів, розмірів та ефективного розміщення.',
  ];

  const whyWeList = [
    'Використовуємо унікальний дизайн банерів, адаптуючи їх до ваших потреб.',
    'Розробляємо адаптивні банери, які ефективно працюють на всіх платформах.',
    'Наша команда спеціалізується на створенні креативних банерів, що привертають увагу та підвищують конверсії.',
    'Не гайте часу — замовте рекламний банер вже сьогодні!',
  ];

  return (
    <MainBannerContainer>
      <BurgerIcon onClick={onClickGood} className="good" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackArrow />
      </NavLink>
      <SideBarMenu isOpen={sidebarSwitcher} />
      <BanersPageContainer>
        <SectionItemBlock>
          <BanersMainTitle ref={textRef}>Рекламні банери</BanersMainTitle>
          <TwoExamplesBanners />
        </SectionItemBlock>

        <SectionItemBlock>
          <BanersSubTitle>
            Що таке рекламні банери та їх призначення.
          </BanersSubTitle>
          <BanersDefaultText>
            Рекламні банери — це графічні об’єкти, що використовуються для
            привертання уваги клієнтів та просування брендів, товарів або
            послуг. Вони спрямовані на виконання певних завдань, таких як
            збільшення продажів, формування позитивного іміджу та залучення
            нових клієнтів.
          </BanersDefaultText>
          <BanersFormatsText>Основні формати:</BanersFormatsText>
          <BanersFormatsContainer>
            <BanersFormatsContainerItem>
              <BanersFormatsContainerItemText>
                Онлайн банери
              </BanersFormatsContainerItemText>
              <BanersFormatsContainerItemImg
                ref={el => (imageRefs.current[0] = el)}
                src={banner_one}
                alt="banner_one"
              />
              <BanersFormatsContainerItemSubText>
                для сайтів / соцмереж / додатків.
              </BanersFormatsContainerItemSubText>
            </BanersFormatsContainerItem>
            <BanersFormatsContainerItem>
              <BanersFormatsContainerItemText>
                Офлайн банери
              </BanersFormatsContainerItemText>
              <BanersFormatsContainerItemImg
                ref={el => (imageRefs.current[1] = el)}
                src={banner_two}
                alt="banner_two"
              />
              <BanersFormatsContainerItemSubText>
                зовнішня реклама (білборди, брендмауери).
              </BanersFormatsContainerItemSubText>
            </BanersFormatsContainerItem>
          </BanersFormatsContainer>
        </SectionItemBlock>
        <SectionItemBlock>
          <ListWrapper ref={leftTextRef}>
            <ServicesList
              title={'Переваги використання рекламних банерів'}
              data={firstList}
            />
          </ListWrapper>
        </SectionItemBlock>
        <SectionItemBlock>
          <BanersSubTitle>Види рекламних банерів</BanersSubTitle>
          <TypeMainContainer>
            <TypeSubContainer>
              <TypeSubContainerText>Статичні</TypeSubContainerText>
              <TypeSubContainerSubText>
                зображення з текстом.
              </TypeSubContainerSubText>
              <TypeSubContainerImage>
                <img
                  ref={el => (imageRefs.current[2] = el)}
                  src={banner_tree}
                  alt="banner_tree"
                />
              </TypeSubContainerImage>
            </TypeSubContainer>
            <TypeSubContainer>
              <TypeSubContainerText>Анімовані</TypeSubContainerText>
              <TypeSubContainerSubText>GIF, HTML5. </TypeSubContainerSubText>
              <TypeSubContainerImage>
                <img
                  ref={el => (imageRefs.current[3] = el)}
                  src={banner_tree}
                  alt="banner_tree"
                />
              </TypeSubContainerImage>
            </TypeSubContainer>
            <TypeSubContainer>
              <TypeSubContainerText>Відео-банери</TypeSubContainerText>
              <TypeSubContainerSubText>
                привертають більше уваги завдяки динаміці.
              </TypeSubContainerSubText>
              <TypeSubContainerImage>
                <img
                  ref={el => (imageRefs.current[4] = el)}
                  src={banner_tree}
                  alt="banner_tree"
                />
              </TypeSubContainerImage>
            </TypeSubContainer>
          </TypeMainContainer>
        </SectionItemBlock>

        <SectionItemBlock>
          <ListWrapper ref={secondTextRef}>
            <ServicesList title={'Наші послуги'} data={secondList} />
          </ListWrapper>
        </SectionItemBlock>

        <SectionItemBlock>
          <BanersSubTitle>Наші роботи та кейси</BanersSubTitle>
          <AdvantagesList>
            <AdvantagesListItem>
              Розробка унікального дизайну банерів "під ключ".
            </AdvantagesListItem>
            <ExapmlesContainer>
              <TwoExamplesBanners />

              <TwoExamplesBanners />
            </ExapmlesContainer>
            <AdvantagesListItem>
              Адаптація банерів для різних платформ (соцмережі, сайти, Google
              Ads).
            </AdvantagesListItem>
            <AdaptContainer>
              <TwoExamplesBanners />
            </AdaptContainer>
          </AdvantagesList>
        </SectionItemBlock>

        <SectionItemBlock>
          <ContactForm
            mainTitle={'Замовте рекламні банери вже зараз!'}
            subTitle={
              'Потрібні банери для бізнесу? Залишайте заявку для консультації та додаткових деталей. Ми створимо професійні банери, що спрацюють на ваш успіх!'
            }
          />
        </SectionItemBlock>

        <SectionItemBlock>
          <WhyWeWrapper ref={wrapperRef}>
            <WhyWeMainText>Чому варто обрати нас?</WhyWeMainText>
            <WhyWeSubText>
              Ми створюємо банери, що ефективно привертають увагу до вашого
              бренду.
            </WhyWeSubText>
            <ServicesList
              title={'Переваги співпраці з нами'}
              data={whyWeList}
            />
          </WhyWeWrapper>
        </SectionItemBlock>
      </BanersPageContainer>
    </MainBannerContainer>
  );
};

export default Baners;
