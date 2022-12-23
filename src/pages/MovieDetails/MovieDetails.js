import { getMovieById } from 'components/services/Api';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import {
  MovieDetailsContainer,
  DetailsContainer,
  GoBack,
    MovieDetailsImg,
    MovieDetailsTitle,
    MovieDetailsDiscription, MovieDetailsAdditional,
    AdditionalContainer,
    AdditionalList,
  AdditionalLink
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieById, setMovieById] = useState(null);
  const { movieId } = useParams();

  console.log(movieId);
  useEffect(() => {
    getMovieById(movieId).then(movieById => setMovieById(movieById));
  }, [movieId]);

  if (!movieById) {
    return;
  }

  const { title, posterPath, releaseDate, overview, voteAverage, genres } =
    movieById;
  return (
    <>
      <GoBack to="/">Go Back</GoBack>
      <MovieDetailsContainer>
        <MovieDetailsImg
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={title}
        />
        <DetailsContainer>
          <MovieDetailsTitle>
            {title} ({new Date(releaseDate).getFullYear()}){' '}
          </MovieDetailsTitle>
          <MovieDetailsDiscription><span>User score:</span> {Math.round(voteAverage * 10)} % </MovieDetailsDiscription>
          <MovieDetailsDiscription><span>Overview:</span> {overview} </MovieDetailsDiscription>
          <MovieDetailsDiscription><span>Genres:</span> {genres.map(genre => genre.name).join(', ')} </MovieDetailsDiscription>
        </DetailsContainer>
      </MovieDetailsContainer>
      <AdditionalContainer>
        <MovieDetailsAdditional >Additional Inforamtion</MovieDetailsAdditional>
        <AdditionalList >
          <AdditionalLink to="cast"> Cast</AdditionalLink>
          <AdditionalLink to="reviews"> Reviews</AdditionalLink>
        </AdditionalList>
        <Outlet />
      </AdditionalContainer>
    </>
  );
};

export default MovieDetails;
