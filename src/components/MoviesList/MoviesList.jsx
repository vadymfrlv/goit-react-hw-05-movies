import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

const MoviesList = ({ data, isHomePage }) => {
  const url = isHomePage ? 'movies/' : '';
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {data.map(elem => (
        <li key={elem.id} className={styles.item}>
          <Link to={`${url}${elem.id}`} state={{ from: location }} className={styles.link}>
            {elem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  data: PropTypes.array.isRequired,
  isHomePage: PropTypes.bool,
};

export default MoviesList;
