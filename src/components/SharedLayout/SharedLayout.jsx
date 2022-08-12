import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from '../Loader';
import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/" className="linkHome">
            Home
          </NavLink>
          <NavLink to="/movies" className="linkMovies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
