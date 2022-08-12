import axios from 'axios';

class FetchMovies {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #KEY = '283606b9670e825b5faecb4b02574510';
  #SEARCH = 'search/movie';
  #TREND = 'trending/movie/day';

  //   trending
  trending = async page => {
    const respons = await axios.get(
      `${this.#BASE_URL}${this.#TREND}?api_key=${this.#KEY}&page=${page}`
    );
    return respons.data.results;
  };

  // search-movies
  search = async (query, page) => {
    const respons = await axios.get(
      `${this.#BASE_URL}${this.#SEARCH}?api_key=${this.#KEY}&query=${query}&page=${page}`
    );
    return respons.data;
  };

  // movie-details
  id = async id => {
    const respons = await axios.get(`${this.#BASE_URL}movie/${id}?api_key=${this.#KEY}`);
    return respons.data;
  };

  // movie-credits
  cast = async id => {
    const respons = await axios.get(`${this.#BASE_URL}movie/${id}/credits?api_key=${this.#KEY}`);
    return respons.data.cast;
  };

  // movie-reviews
  reviews = async id => {
    const respons = await axios.get(`${this.#BASE_URL}movie/${id}/reviews?api_key=${this.#KEY}`);
    return respons.data.results;
  };
}

const movieAPI = new FetchMovies();

export default movieAPI;
