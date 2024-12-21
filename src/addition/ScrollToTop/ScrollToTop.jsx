import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка страницы вверх
    }, [pathname]); // Срабатывает при изменении маршрута

    return null; // Компонент ничего не рендерит
};

export default ScrollToTop;