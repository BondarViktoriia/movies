// https://api.themoviedb.org/3/movie/550?api_key=9384544c410021c8ddd99f4e7b3ff84b

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '9384544c410021c8ddd99f4e7b3ff84b';
const TRENGING_MOVIES = '/trending/movie/day';

export const getTrendingMovies = async () => {
  const { data } = await axios(TRENGING_MOVIES, {
    params: {
      api_key: API_KEY,
    },
  });
  const moviesMaper = movies => {
    return movies.map(
      ({ id, title, poster_path: posterPath, release_date: releaseDate }) => ({
        id,
        title,
        posterPath,
        releaseDate,
      })
    );
  };
  return moviesMaper(data.results);
};

export const getMovieById = async movieId => {
  const { data } = await axios(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  const {
    title,
    poster_path: posterPath,
    release_date: releaseDate,
    genres,
    overview,
    vote_average: voteAverage,
  } = data;
  return { title, posterPath, releaseDate, genres, overview, voteAverage };
};

export const getCast = async movieId => {
  const { data } = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  const actorsMaper = actors => {
    return actors.map(({ id, name, profile_path: profilePath, character }) => ({
      id,
      name,
      profilePath,
      character,
    }));
  };
  return actorsMaper(data.cast);
};

export const getReviews = async movieId => {
  const { data } = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  const reviewsMaper = reviews => {
    return reviews.map(({ id, author, content }) => ({ id, author, content }));
  };
  return reviewsMaper(data.results);
};

export const getMovies = async query => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
      page: 1,
      include_adult: false,
    },
  });
  const moviesMaper = movies => {
    return movies.map(
      ({ id, title, poster_path: posterPath, release_date: releaseDate }) => ({
        id,
        title,
        posterPath,
        releaseDate,
      })
    );
  };
  return moviesMaper(data.results);
};
