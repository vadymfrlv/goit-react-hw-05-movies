import PropTypes from 'prop-types';
import styles from './MovieInfo.module.css';

const MovieInfo = ({ data }) => {
  return (
    <div className={styles.infoContainer}>
      <img className={styles.img} src={data.img} alt={data.title} height="150" width="150" />
      <div className={styles.info}>
        <h2 className={styles.title}>
          {data.title}
          <span className={styles.year}>({data.year})</span>
        </h2>
        <p className={styles.score}>User score: {data.score}%</p>
        <h3 className={styles.overview}>Overview</h3>
        <p>{data.overview}</p>
        <h3 className={styles.genres}>Genres</h3>
        <p>{data.genres}</p>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MovieInfo;
