import React, { useEffect } from "react";
import gsap from "gsap"; // Импортируем gsap для анимации
import { SideBarContainer } from "./SideBarMenu.styled"; // Ваш стиль для сайдбара

const SideBarMenu = ({ isOpen }) => {
    useEffect(() => {
        if (isOpen) {
            gsap.to('.sideMenu', {
                x: 0,
                opacity: 1,
                duration: 0.4,
            });
        } else {
            gsap.to('.sideMenu', {
                x: '-100vw',
                opacity: 0,
                duration: 0.4,
            });
        }
    }, [isOpen]); // Перезапускаем анимацию, если `isOpen` изменяется

    return (
        <SideBarContainer className="sideMenu">
            Side Menu
        </SideBarContainer>
    );
};

export default SideBarMenu;