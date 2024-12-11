import MainPage from 'Pages/MainPage/MainPage';
import { Link, Route, Router, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};
