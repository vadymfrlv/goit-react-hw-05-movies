import { useState, useEffect } from 'react';
import Section from '../../components/Section';
import movieAPI from '../../services/movieAPI';
import stateMachine from '../../services/status';
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader';
import Notification from '../../components/Notification';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(stateMachine.IDLE);

  useEffect(() => {
    const fetchMovies = async () => {
      setStatus(stateMachine.PENDING);

      try {
        const response = await movieAPI.trending(page);
        setData(response);
        setStatus(stateMachine.RESOLVED);
      } catch (error) {
        setStatus(stateMachine.REJECTED);
        setPage(1);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <Section>
      <h1 className={styles.title}>On trending today</h1>

      {status === stateMachine.PENDING && <Loader />}

      {status === stateMachine.RESOLVED && <MoviesList data={data} isHomePage={true} />}

      {status === stateMachine.REJECTED && (
        <Notification message="Oops, something went wrong! Try reloading this page!" />
      )}
    </Section>
  );
};

export default HomePage;
