import { BurgerIcon } from "components/Welcome/Welcome.styled"
import { BackArrow, ListContainer, MainListContainer, MainListItem, ServicesContainer, ServicesLeftBottomContainer, ServicesLeftContainer, ServicesLeftTopContainer, ServicesLeftTopTitle, ServicesMainContainer, ServicesMainTitle, ServicesRightContainer, ServicesRightBottomContainer } from "./Services.styled"
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
                <ServicesLeftContainer>
                    <ServicesLeftTopContainer>
                        <ServicesLeftTopTitle>Розробка.</ServicesLeftTopTitle>
                        <MainListContainer>
                            <ListContainer>
                                <MainListItem>PWA (Progressive Web Apps) </MainListItem>
                                <MainListItem>API розробка </MainListItem>
                                <MainListItem>Big Data та аналітика </MainListItem>
                                <MainListItem>Автоматизація та оптимізація бізнес-процесів </MainListItem>
                                <MainListItem>Розробка електронних журналов і систем обліку </MainListItem>
                                <MainListItem>Платформи для онлайн-освіти</MainListItem>
                            </ListContainer>
                            <ListContainer>
                                <MainListItem>Системи документообігу</MainListItem>
                                <MainListItem>ERP и CRM системи</MainListItem>
                                <MainListItem>Корпоративні сайти </MainListItem>
                                <MainListItem>Інтернет-магазини </MainListItem>
                                <MainListItem>Односторінкові сайти (landing page)  </MainListItem>
                                <MainListItem>Мобільні додатки  </MainListItem>
                                <MainListItem>ШІ </MainListItem>
                            </ListContainer>
                        </MainListContainer>

                    </ServicesLeftTopContainer>
                    <ServicesLeftBottomContainer>
                        <ServicesLeftTopTitle>МАРКЕТИНГ.</ServicesLeftTopTitle>
                        <MainListContainer>
                            <ListContainer>
                                <MainListItem>Банерна реклама на сайтах</MainListItem>
                                <MainListItem>SMM</MainListItem>
                                <MainListItem>Контекстна реклама</MainListItem>
                                <MainListItem>Seo оптимізація</MainListItem>
                                <MainListItem>E-mail розсилки</MainListItem>
                                <MainListItem>Аналіз конкурентів</MainListItem>
                            </ListContainer>
                            <ListContainer>
                                <MainListItem>Веб аналітика</MainListItem>
                                <MainListItem>Контент план</MainListItem>
                                <MainListItem>Таргетована реклама</MainListItem>
                                <MainListItem>Маркетингова стратегія</MainListItem>
                                <MainListItem>Маркетинговий аудит</MainListItem>
                                <MainListItem>Аналіз конкурентів</MainListItem>
                            </ListContainer>
                        </MainListContainer>
                    </ServicesLeftBottomContainer>
                </ServicesLeftContainer>
                <ServicesRightContainer>
                    <ServicesMainTitle>ПОСЛУГИ</ServicesMainTitle>
                    <ServicesRightBottomContainer>
                        <ServicesLeftTopTitle>ДИЗАЙН.</ServicesLeftTopTitle>
                        <MainListContainer>
                            <ListContainer>
                                <MainListItem>Рекламні банери</MainListItem>
                                <MainListItem>Моушн дизайн</MainListItem>
                                <MainListItem>Бренд Бук</MainListItem>
                                <MainListItem>Веб дизайн</MainListItem>
                                <MainListItem>UX/UI дизайн </MainListItem>
                                <MainListItem>Іллюстрації та іконографіка</MainListItem>
                                <MainListItem>3D моделювання і визуалізація</MainListItem>
                                <MainListItem>Інфографіка</MainListItem>
                            </ListContainer>
                            <ListContainer>
                                <MainListItem>Пакетний дизайн </MainListItem>
                                <MainListItem>Типографіка і леттерінг</MainListItem>
                                <MainListItem>Дизайн для соціальних мереж</MainListItem>
                                <MainListItem>Анимація та відео дизайн </MainListItem>
                                <MainListItem>Розробка фірмового стилю</MainListItem>
                                <MainListItem>Ретуш та обробка фотографій</MainListItem>
                            </ListContainer>
                        </MainListContainer>
                    </ServicesRightBottomContainer>
                </ServicesRightContainer>
            </ServicesMainContainer>

        </ServicesContainer>)
}
export default Services