import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import stateMachine from '../../services/status';
import movieAPI from '../../services/movieAPI';
import Loader from '../Loader';
import Notification from '../Notification';
import styles from './Cast.module.css';

const Cast = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(stateMachine.IDLE);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      setStatus(stateMachine.PENDING);

      try {
        const response = await movieAPI.cast(movieId);
        setData(response);
        setStatus(stateMachine.RESOLVED);
      } catch (error) {
        setStatus(stateMachine.REJECTED);
      }
    };
    fetchMovies();
    // eslint-disable-next-line
  }, []);

  if (status === stateMachine.PENDING) {
    return <Loader />;
  }

  if (status === stateMachine.RESOLVED) {
    return (
      <ul className={styles.list}>
        {data.map(elem => (
          <li key={elem.id} className={styles.item}>
            {elem['profile_path'] ? (
              <img
                className={styles.img}
                src={`https://image.tmdb.org/t/p/w500${elem['profile_path']}`}
                alt={elem.name}
                width="150"
                height="200"
              />
            ) : (
              <img
                className={styles.img}
                src="https://raw.githubusercontent.com/vadymfrlv/storage/b4e0abb7f45980d92f3ee2da26a5960181a17f8f/filmoteka/posterholder.jpg"
                alt=""
                width="150"
                height="200"
              />
            )}
            <div className={styles.info}>
              <p>Name: {elem.name}</p>
              <p>Character: {elem.character}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  if (status === stateMachine.REJECTED) {
    return <Notification message="Oops, something went wrong!" />;
  }
};

export default Cast;
