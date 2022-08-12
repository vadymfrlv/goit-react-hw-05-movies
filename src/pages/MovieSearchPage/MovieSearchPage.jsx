import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Section from '../../components/Section';
import stateMachine from '../../services/status';
import movieAPI from '../../services/movieAPI';
import Loader from '../../components/Loader';
import Notification from '../../components/Notification';
import SearchForm from '../../components/SearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';

const MovieSearch = () => {
  const [search, setSearch] = useSearchParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(stateMachine.IDLE);

  const queryURL = search.get('query') ?? '';

  useEffect(() => {
    if (queryURL === '') {
      return;
    }
    setPage(1);

    const fetchMovies = async () => {
      setStatus(stateMachine.PENDING);

      try {
        const response = await movieAPI.search(queryURL, page);
        setData(response.results);
        setStatus(stateMachine.RESOLVED);
      } catch (error) {
        setStatus(stateMachine.REJECTED);
      }
    };
    fetchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <Section>
      <SearchForm setSearch={setSearch} setData={setData} setStatus={setStatus} />

      {status === stateMachine.PENDING && <Loader />}

      {status === stateMachine.RESOLVED && data.length > 0 && queryURL !== '' && (
        <MoviesList data={data} isHomePage={false} />
      )}

      {status === stateMachine.REJECTED && (
        <Notification message="Oops, something went wrong! Please try again!" />
      )}
    </Section>
  );
};

export default MovieSearch;
