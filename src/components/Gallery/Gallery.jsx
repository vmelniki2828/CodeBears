import { useEffect } from 'react';
import gsap from 'gsap';
import { GalleryContainer, GalleryMoon } from "./Gallery.styled";
import moon from "../../image/moonWithBear.png";

const Gallery = () => {
  useEffect(() => {
    // Устанавливаем начальное состояние меню (спрятано)
    gsap.fromTo('.moon2', { x: '-100vw', opacity: 0 }, {
      x: '0', opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: {
        trigger: '.moon2',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
    gsap.to('.moon2', {
      rotation: '+=360',
      duration: 30, // Длительность анимации в секундах
      repeat: -1, // Бесконечное повторение анимации
      ease: 'linear', // Тип анимации (линейное движение)
    });
  }, []);


  return (<GalleryContainer>
    <GalleryMoon src={moon} alt="moon" className="moon2" />

  </GalleryContainer>)
}

export default Gallery;