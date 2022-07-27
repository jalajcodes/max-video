import { client } from "./api-client";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
const POSTER_SIZE = "w500";

const fetchSearchResults = async (searchQuery) => {
  const endpoint = `${SEARCH_BASE_URL}${searchQuery}`;
  return await (await fetch(endpoint)).json();
};

const getVideoUrl = (video) => {
  const trailer = video.videos.results.find((v) => {
    return v.type === "Trailer";
  });
  return `https://www.youtube.com/embed/${trailer.key}`;
};

export { IMAGE_BASE_URL, POSTER_SIZE, fetchSearchResults, getVideoUrl };
