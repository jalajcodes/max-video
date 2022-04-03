const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
const POSTER_SIZE = "w500";

const fetchMovies = async (genre) => {
  if (genre === "popular") {
    const endpoint = `${POPULAR_BASE_URL}`;
    return await (await fetch(endpoint)).json();
  } else if (genre) {
    const endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${genre}`;
    return await (await fetch(endpoint)).json();
  }
};

export { fetchMovies, IMAGE_BASE_URL, POSTER_SIZE };
