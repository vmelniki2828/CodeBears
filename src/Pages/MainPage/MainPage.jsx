import Hero from "components/Hero/Hero";
import Welcome from "components/Welcome/Welcome";
import gsap from "gsap";
import { useEffect, useState } from "react";

const MainPage = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    useEffect(() => {
        const handleScroll = e => {
            const scrollSpeed = e.deltaY;

            // Определяем направление скроллинга
            setScrollDirection(scrollSpeed > 0 ? 'down' : 'up');

            // Анимация для логотипа и текста
            if (scrollDirection === 'down') {
                gsap.to('.title', {
                    y: '-100vh',
                    duration: 0.9, // Уменьшаем длительность для мгновенности
                });
                gsap.to('.text-block', {
                    opacity: 1,
                    y: '0',
                    duration: 0.4, // Уменьшаем длительность для мгновенности
                });
            } else if (scrollDirection === 'up') {
                gsap.to('.title', {
                    y: '0',
                    duration: 0.9, // Уменьшаем длительность для мгновенности
                });
                gsap.to('.text-block', {
                    opacity: 0,
                    y: '100vh',
                    duration: 0.4, // Уменьшаем длительность для мгновенности
                });
            }
        };

        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [scrollDirection]);

    return (<>
        <Welcome />
        <Hero />
    </>)

};

export default MainPage;
