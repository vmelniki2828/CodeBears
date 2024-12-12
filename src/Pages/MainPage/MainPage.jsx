import { useEffect, useState } from 'react';
import gsap from 'gsap';
import AboutUs from 'components/AboutUs/AboutUs';
import Hero from 'components/Hero/Hero';
import Welcome from 'components/Welcome/Welcome';

const MainPage = () => {
  const [scrollCount, setScrollCount] = useState(1); // Отслеживаем номер прокрутки
  const [visibleBlocks, setVisibleBlocks] = useState(1); // Видимые блоки (1-3)
  const maxBlocks = 3;

  console.log(scrollCount);

  useEffect(() => {
    const handleScroll = e => {
      const scrollSpeed = e.deltaY;
      console.log(`Скорость прокрутки: ${scrollSpeed}`);

      // Если прокрутка вниз
      if (scrollSpeed > 0 && scrollCount < maxBlocks) {
        setScrollCount(prev => prev + 1); // Увеличиваем счетчик прокрутки
      }

      // Если прокрутка вверх
      if (scrollSpeed < 0 && scrollCount > 1) {
        setScrollCount(prev => prev - 1); // Уменьшаем счетчик прокрутки
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scrollCount]);

  useEffect(() => {
    if (scrollCount === 2) {
      gsap.to('.title', { y: '-100vh', duration: 0.9 });
      gsap.to('.text-block', { opacity: 1, y: '0', duration: 0.4 });
      gsap.to('#about-us', { opacity: 0, y: '100vh', duration: 0.4 });
    } else if (scrollCount === 1) {
      gsap.to('.title', { y: '0', duration: 0.9 });
      gsap.to('.text-block', { opacity: 0, y: '100vh', duration: 0.4 });
    } else if (scrollCount === 3) {
      gsap.to('.text-block', { y: '-100vh', duration: 0.9 });
      gsap.to('#about-us', { opacity: 1, y: '0', duration: 0.4 });
    }
  }, [scrollCount]);
  return (
    <>
      <Welcome />
      <Hero />
      <AboutUs />
    </>
  );
};

export default MainPage;
