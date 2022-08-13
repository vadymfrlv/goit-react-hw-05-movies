import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

const MoviesList = ({ data, isHomePage }) => {
  const url = isHomePage ? 'movies/' : '';
  const location = useLocation();

  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {data.map(elem => (
          <li className={styles.item} key={elem.id}>
            <Link to={`${url}${elem.id}`} state={{ from: location }}>
              {elem['poster_path'] ? (
                <img
                  className={styles.img}
                  src={`https://image.tmdb.org/t/p/w500/${elem['poster_path']}`}
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  data: PropTypes.array.isRequired,
  isHomePage: PropTypes.bool,
};

export default MoviesList;
