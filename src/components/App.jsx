import MainPage from 'Pages/MainPage/MainPage';
import ServicesPage from 'Pages/ServicesPage/ServicesPage';
import { Link, Route, Router, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/services' element={<ServicesPage />} />
      </Routes>
    </div>
  );
};
