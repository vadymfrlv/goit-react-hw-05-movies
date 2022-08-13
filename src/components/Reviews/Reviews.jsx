import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieAPI from '../../services/movieAPI';
import stateMachine from '../../services/status';
import Loader from '../Loader';
import Notification from '../Notification';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(stateMachine.IDLE);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      setStatus(stateMachine.PENDING);

      try {
        const response = await movieAPI.reviews(movieId);
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
    if (data.length === 0) {
      return <p className={styles.inform}>There are no reviews for this movie yet</p>;
    }
    if (data.length !== 0) {
      return (
        <ul>
          {data.map((elem, idx) => (
            <li className={styles.item} key={idx}>
              <p className={styles.author}>Author: {elem.author}</p>
              <p className={styles.content}>{elem.content}</p>
            </li>
          ))}
        </ul>
      );
    }
  }

  if (status === stateMachine.REJECTED) {
    return <Notification message="Oops, something went wrong!" />;
  }
};

export default Reviews;
