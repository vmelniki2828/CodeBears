import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import {
  WhyWeContainer,
  WhyWeMainTitle,
  WhyWeSubTitle,
  WhyWeList,
  WhyWeItem,
  WhyWeItemTitle,
  WhyWeItemSubTitle,
} from './WhyWe.styled';

const WhyWe = () => {
  const [isVisible, setIsVisible] = useState(false); // Состояние видимости
  const [hasAnimated, setHasAnimated] = useState(false); // Было ли уже проиграно
  const whyWeRef = useRef(null); // Ссылка на контейнер

  // Используем Intersection Observer для отслеживания видимости компонента
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true); // Когда компонент виден первый раз
          setHasAnimated(true); // Отмечаем, что анимация проиграна
        }
      },
      { threshold: 0.5 } // Срабатывает, когда 50% компонента видны
    );
  
    const currentRef = whyWeRef.current; // Фиксируем текущее значение рефа
  
    if (currentRef) {
      observer.observe(currentRef); // Начинаем наблюдение
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Останавливаем наблюдение
      }
    };
  }, [hasAnimated]); // Следим за hasAnimated

  // Эффект для запуска анимации
  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        '.why-left',
        { x: '-100vw', opacity: 0 }, // Начальные значения
        { x: '0', opacity: 1, duration: 1, ease: 'power3.out' } // Конечные значения
      );
      gsap.fromTo(
        '.why-right',
        { x: '100vw', opacity: 0 }, // Начальные значения
        { x: '0', opacity: 1, duration: 1, ease: 'power3.out' } // Конечные значения
      );
      gsap.fromTo(
        '.why-bottom',
        { y: '100vw', opacity: 0 }, // Начальные значения
        { y: '0', opacity: 1, duration: 1, ease: 'power3.out' } // Конечные значения
      );
    }
  }, [isVisible]);

  return (
    <WhyWeContainer id="WhyWe" ref={whyWeRef}>
      <WhyWeMainTitle className="why-left">ЧОМУ?</WhyWeMainTitle>
      <WhyWeSubTitle className="why-right">ВАРТО вибрати CODEBEARS!</WhyWeSubTitle>
      <WhyWeList className="why-bottom">
        <WhyWeItem>
          <WhyWeItemTitle>Legal Processing.</WhyWeItemTitle>
          <WhyWeItemSubTitle>
            We love creativity, but do not forget about the objective reality, all our business
            deals are designed in such a way that each party gets the desired result.
          </WhyWeItemSubTitle>
        </WhyWeItem>
        <WhyWeItem>
          <WhyWeItemTitle>Legal Processing.</WhyWeItemTitle>
          <WhyWeItemSubTitle>
            We love creativity, but do not forget about the objective reality, all our business
            deals are designed in such a way that each party gets the desired result.
          </WhyWeItemSubTitle>
        </WhyWeItem>
        <WhyWeItem>
          <WhyWeItemTitle>Legal Processing.</WhyWeItemTitle>
          <WhyWeItemSubTitle>
            We love creativity, but do not forget about the objective reality, all our business
            deals are designed in such a way that each party gets the desired result.
          </WhyWeItemSubTitle>
        </WhyWeItem>
      </WhyWeList>
    </WhyWeContainer>
  );
};

export default WhyWe;
