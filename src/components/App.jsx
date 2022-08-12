import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieSearchPage = lazy(() =>
  import('../pages/MovieSearchPage/MovieSearchPage' /* webpackChunkName: 'Movie Search Page' */)
);
const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: 'Home Page' */)
);
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: 'Movie Details Page' */)
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MovieSearchPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
