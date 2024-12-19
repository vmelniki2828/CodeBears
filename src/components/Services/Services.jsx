import { BurgerIcon } from "components/Welcome/Welcome.styled"
import { BackArrow, ServicesContainer, ServicesMainContainer } from "./Services.styled"
import SideBarMenu from "components/SideBarMenu/SideBarMenu"
import { useEffect, useState } from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

const Services = () => {
    const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню

    const onClickGood = () => {
        setSidebarSwitcher(prevState => !prevState); // Переключение состояния меню
    };

    useEffect(() => {
        // Устанавливаем начальное состояние меню (спрятано)
        gsap.set('.sideMenu', { x: '-100vw' });
    }, []);

    return (
        <ServicesContainer>
            <BurgerIcon onClick={onClickGood} className="good" />
            <NavLink to="/" style={{ textDecoration: 'none' }}>
                <BackArrow />
            </NavLink>
            <SideBarMenu isOpen={sidebarSwitcher} />

            <ServicesMainContainer>
                dsadasda
            </ServicesMainContainer>

        </ServicesContainer>)
}
export default Services