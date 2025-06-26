import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import HomePage from './pages/home/HomePage';
import DetailKomik from './pages/detail/DetailKomik';
import ChaptersPage from './pages/ChaptersPage';
import GenreDetail from './pages/GenreDetail';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:komikId" element={<DetailKomik />} />
        <Route path="/chapter/:chapterSlug" element={<ChaptersPage />} />
        <Route
          path="/genre/:genreId/page/:pageNumber"
          element={<GenreDetail />}
        />
        <Route path="/genre/:genreId" element={<GenreDetail />} />

        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
