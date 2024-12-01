import DanyaPage from 'Pages/Danya/DanyaPage';
import MelyaPage from 'Pages/Melya/MelyaPage';
import { Link, Route, Router, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      {/* <nav>
        <Link to="/DanyaPage">Page 1</Link> | <Link to="/MelyaPage">Page 2</Link>
      </nav> */}
      <Routes>
        <Route path="/DanyaPage" element={<DanyaPage />} />
        <Route path="/MelyaPage" element={<MelyaPage />} />
      </Routes>
    </div>
  );
};
