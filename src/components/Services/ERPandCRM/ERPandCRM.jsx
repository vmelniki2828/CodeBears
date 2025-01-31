import { BurgerIcon } from 'components/Welcome/Welcome.styled';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BackArrow } from '../Services.styled';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import {
  ERPandCRMMainTitle,
  MainERPandCRMContainer,
  PageERPandCRMContainer,
} from './ERPandCRM.styled';

const ERPandCRM = () => {
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню
  const textRef = useRef(null);

  const onClickGood = () => {
    setSidebarSwitcher(prevState => !prevState);
  };

  useEffect(() => {
    const chars = textRef.current.textContent.split('');
    textRef.current.textContent = '';
    chars.forEach((char, index) => {
      setTimeout(() => {
        textRef.current.textContent += char;
      }, index * 70);
    });
  }, []);

  return (
    <MainERPandCRMContainer>
      <BurgerIcon onClick={onClickGood} className="good" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackArrow />
      </NavLink>
      <SideBarMenu isOpen={sidebarSwitcher} />
      <PageERPandCRMContainer>
        {' '}
        <ERPandCRMMainTitle ref={textRef}>
          {' '}
          ERP и CRM системи
        </ERPandCRMMainTitle>
      </PageERPandCRMContainer>
    </MainERPandCRMContainer>
  );
};

export default ERPandCRM;
