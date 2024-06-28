import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GamesPage from '../pages/GamesPage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';

const BrowserRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games-page" element={<GamesPage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default BrowserRoutes;
