import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import movieAPI from '../../services/movieAPI';
import stateMachine from '../../services/status';
import Section from '../../components/Section';
import MovieInfo from '../../components/MovieInfo';
import Loader from '../../components/Loader';
import Notification from '../../components/Notification';
import styles from './MovieDetailsPage.module.css';

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(stateMachine.IDLE);

  const location = useLocation();
  const refContainer = useRef(null);
  const { movieId } = useParams();

  useEffect(() => {
    refContainer.current = location.state?.from ?? '/';

    const fetchMovies = async () => {
      setStatus(stateMachine.PENDING);

      try {
        const response = await movieAPI.id(movieId);
        dataTransform(response);
      } catch (error) {
        setStatus(stateMachine.REJECTED);
      }
    };

    const dataTransform = object => {
      const genres = object.genres.map(genre => genre.name).join(', ');
      const year = object['release_date'].split('-')[0];
      const score = Math.ceil(object['vote_average'] * 10);
      const newData = {
        img: `https://image.tmdb.org/t/p/w500/${object['poster_path']}`,
        title: object.title,
        genres,
        year,
        score,
        overview: object.overview,
      };
      setData(newData);
      setStatus(stateMachine.RESOLVED);
    };

    fetchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <Section>
      {status === stateMachine.PENDING && <Loader />}

      {status === stateMachine.RESOLVED && (
        <>
          <Link to={refContainer.current} className={styles.backBtn}>
            {'Go back'}
          </Link>
          <MovieInfo data={data} />
          <div className={styles.infoSection}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <NavLink to={'cast'} className={styles.additInfo}>
                  Cast
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink to={'reviews'} className={styles.additInfo}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}

      {status === stateMachine.REJECTED && (
        <Notification message="Oops, something went wrong! Try reloading this page!" />
      )}
    </Section>
  );
};

export default MovieDetails;
