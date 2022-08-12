import { useState } from 'react';
import PropTypes from 'prop-types';
import movieAPI from '../../services/movieAPI';
import stateMachine from '../../services/status';
import styles from './SearchForm.module.css';

const SearchForm = ({ setSearch, setData, setStatus }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    setQuery(evt.target.value.trimStart());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query === '') {
      return;
    }
    setSearch({ query });

    const fetchMovies = async () => {
      setStatus(stateMachine.PENDING);

      try {
        const response = await movieAPI.search(query, 1);
        setData(response.results);
        setStatus(stateMachine.RESOLVED);
      } catch (error) {
        setStatus(stateMachine.REJECTED);
      }
    };
    fetchMovies();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="query"
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className={styles.formBtn}></button>
    </form>
  );
};

SearchForm.propTypes = {
  setSearch: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default SearchForm;
