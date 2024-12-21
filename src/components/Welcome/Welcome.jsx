import { useEffect, useRef, useState } from 'react';
import {
    Body,
    BurgerIcon,
    SideBarContainer,
    Span,
    Stars,
    Stars2,
    Stars3,
    StarsWrapper,
    TextContainer,
    Title,
    WelcomeContainer,
} from './Welcome.styled';
import gsap from 'gsap';
import bez_glaz from '../../image/bez_glaz.svg';
import glaza from '../../image/gla3a.svg';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';

const Welcome = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const text = 'CODEBEARS CODEBEARS CODEBEARS CODEBEARS ';

    const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню
    const titleRef = useRef(null); // Создаем реф для контейнера Title

    const onClickGood = () => {
        setSidebarSwitcher(prevState => !prevState); // Переключение состояния меню
    };

    useEffect(() => {
        // Устанавливаем начальное состояние меню (спрятано)
        gsap.set('.sideMenu', { x: '-100vw' });
    }, []);

    useEffect(() => {
        // Анимация для контейнера Title
        gsap.fromTo(
            titleRef.current, // Таргетируем контейнер через реф
            { opacity: 0, scale: 0.5 }, // Начальное состояние
            {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: 'power3.out', // Плавная кривая
                delay: 0.5, // Задержка перед анимацией
            }
        );
    }, []);

    useEffect(() => {
        const handleMouseMove = e => {
            // Центр экрана (или центра контейнера глаз)
            const eyeCenterX = window.innerWidth / 2;
            const eyeCenterY = window.innerHeight / 2;

            // Координаты мыши относительно центра глаз
            const mouseX = e.clientX - eyeCenterX;
            const mouseY = e.clientY - eyeCenterY;

            // Устанавливаем ограничение движения глаз
            const maxDistance = 10; // Максимальное смещение глаз в пикселях
            const distance = Math.sqrt(mouseX ** 2 + mouseY ** 2); // Длина вектора до мыши

            // Нормализуем движение, чтобы не выходить за пределы maxDistance
            const scale = Math.min(maxDistance / distance, 1);

            setOffset({
                x: mouseX * scale,
                y: mouseY * scale,
            });
        };

        // Добавляем глобальный обработчик мыши
        window.addEventListener('mousemove', handleMouseMove);

        // Удаляем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <WelcomeContainer>
            <BurgerIcon onClick={onClickGood} className="good" />
            <SideBarMenu isOpen={sidebarSwitcher} onClickGood={onClickGood} />

            <Title
                id="title"
                className="face-container title"
                ref={titleRef} // Привязываем реф к контейнеру
            >
                <img
                    src={bez_glaz}
                    alt="Face"
                    style={{
                        display: 'block',
                    }}
                />
                {/* Глаза */}
                <img
                    src={glaza}
                    alt="Eyes"
                    style={{
                        position: 'absolute',
                        transform: `translate(0, 0) translate(${offset.x}px, ${offset.y}px)`,
                        transition: 'transform 0.15s ease-out',
                    }}
                />
                <Body style={{ position: 'absolute' }}>
                    <TextContainer>
                        {text.split('').map((char, index) => (
                            <Span key={index} angle={index * (360 / text.length)}>
                                {char}
                            </Span>
                        ))}
                    </TextContainer>
                </Body>
            </Title>
        </WelcomeContainer>
    );
};

export default Welcome;
