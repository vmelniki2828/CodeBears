import { useEffect } from 'react';
import gsap from 'gsap';
import { GalleryContainer,GalleryMoon } from "./Gallery.styled";
import moon from "../../image/moonWithBear.png";

const Gallery = () => {
    useEffect(() => {
        // Устанавливаем начальное состояние меню (спрятано)
        gsap.set('.moon2', { y: '0' });
        gsap.to('.moon2', {
          rotation: 360,
          duration: 30, // Длительность анимации в секундах
          repeat: -1, // Бесконечное повторение анимации
          ease: 'linear', // Тип анимации (линейное движение)
        });
      }, []);


    return (<GalleryContainer>
        <GalleryMoon src={moon} alt="moon" className="moon2"/>
        
    </GalleryContainer>)
}

export default Gallery;