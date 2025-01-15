import { BurgerIcon } from 'components/Welcome/Welcome.styled';
import {
  BrandBookDefaultText,
  BrandBookMainTitle,
  BrandBookPageContainer,
  BrandBookSubTitle,
  MainBrandBookContainer,
} from './BrandBook.styled';
import { NavLink } from 'react-router-dom';
import { BackArrow } from '../Services.styled';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import { useState } from 'react';

const BrandBook = () => {
  const [sidebarSwitcher, setSidebarSwitcher] = useState(false); // Стейт для управления состоянием меню

  const onClickGood = () => {
    setSidebarSwitcher(prevState => !prevState); // Переключение состояния меню
  };

  return (
    <MainBrandBookContainer>
      <BurgerIcon onClick={onClickGood} className="good" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <BackArrow />
      </NavLink>
      <SideBarMenu isOpen={sidebarSwitcher} />
      <BrandBookPageContainer>
        <BrandBookMainTitle>
          Брендбук: основа для побудови сильного бренду
        </BrandBookMainTitle>
        <BrandBookDefaultText>
          Створення впізнаваного образу компанії — надзвичайно важливе завдання
          для будь-якого бізнесу. Для цього існує спеціальний документ, який
          називається <strong>брендбук</strong>. Він допомагає вибудувати чітку
          систему правил і рекомендацій, які гарантують єдність усіх візуальних
          і комунікаційних елементів. Якщо ви прагнете виділитися на ринку та
          підвищити довіру до компанії, варто дізнатися,{' '}
          <strong>з чого складається брендбук</strong> і чому{' '}
          <strong>бренд бук це</strong> надзвичайно важливий крок у розвитку
          бренду.
        </BrandBookDefaultText>
        <BrandBookDefaultText>
          В основі будь-якого брендового посібника лежить{' '}
          <strong>фірмовий стиль</strong> — набір графічних та вербальних
          характеристик, які визначають, як саме ваша компанія має виглядати і
          “звучати”. Саме <strong>фірмовий стиль це</strong> фундамент для всіх
          наступних комунікацій: логотип, шрифти, кольори та спосіб спілкування
          з аудиторією. Якщо ви шукаєте інформацію про те, як формується{' '}
          <strong>фірмовий стиль відомих світових брендів</strong>, то знайдете
          чимало прикладів, які підкажуть основний напрям і допоможуть розробити
          власний унікальний стиль.
        </BrandBookDefaultText>
        <BrandBookDefaultText>
          Заглиблюючись у тему брендингу, ви неодмінно натрапите на{' '}
          <strong>брендбук приклад</strong> від різних компаній. Вони наочно
          демонструють, як складові ідентичності узгоджуються між собою. Серед
          найважливіших розділів — <strong>елементи фірмового стилю</strong>,
          структура корпоративних повідомлень, а також загальні поради щодо
          оформлення друкованих і цифрових матеріалів. До речі,{' '}
          <strong>брендбук ціна</strong> може варіюватися залежно від обсягу
          роботи та складності проєкту, але інвестиція майже завжди окуповується
          завдяки посиленню позицій на ринку.
        </BrandBookDefaultText>
        <BrandBookSubTitle>
          Що таке брендбук і навіщо він потрібен?
        </BrandBookSubTitle>
        <BrandBookDefaultText>
          <strong>Бренд бук це</strong> комплексний путівник, де чітко прописано
          стандарти використання айдентики. Іншими словами, це “біблія” вашого
          бренду, де зібрано <strong>основні складові фірмового стилю</strong>{' '}
          та принципи їхнього застосування. Якщо ми говоримо про{' '}
          <strong>з чого складається брендбук</strong>, то обов’язковими
          елементами є логотип, фірмові кольори, шрифти та тон спілкування.
        </BrandBookDefaultText>
      </BrandBookPageContainer>
    </MainBrandBookContainer>
  );
};

export default BrandBook;
