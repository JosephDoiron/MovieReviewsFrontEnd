import { Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import BrowseMoviesPage from "./pages/BrowseMoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import CriticPage from "./pages/CriticPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<BrowseMoviesPage />} />
        <Route path="movies/:id" element={<MovieDetailPage />} />
        <Route path="critic/:authorId" element={<CriticPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
