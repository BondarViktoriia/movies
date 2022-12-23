import { getMovieById } from 'components/services/Api';
import { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  MovieDetailsContainer,
  DetailsContainer,
  GoBack,
  MovieDetailsImg,
  MovieDetailsTitle,
  MovieDetailsDiscription,
  MovieDetailsAdditional,
  AdditionalContainer,
  AdditionalList,
  AdditionalLink,
} from './MovieDetails.styled';
import imageNotFound from '../../images/notfound.png';

const MovieDetails = () => {
  const [movieById, setMovieById] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(movieId)
      .then(movieById => {
        setMovieById(movieById);
        setError(null);
      })
      .catch(error => {
        setError(error);
        setMovieById(null);
      });
  }, [movieId, error]);

  if (!movieById) {
    return;
  }

  const { title, posterPath, releaseDate, overview, voteAverage, genres } =
    movieById;
  return (
    <>
      <GoBack to={backLinkHref}>Go Back</GoBack>
      <MovieDetailsContainer>
        <MovieDetailsImg
          src={
            posterPath
              ? `https://image.tmdb.org/t/p/w500/${posterPath}`
              : imageNotFound
          }
          alt={title}
        />
        <DetailsContainer>
          <MovieDetailsTitle>
            {title} ({new Date(releaseDate).getFullYear()}){' '}
          </MovieDetailsTitle>
          <MovieDetailsDiscription>
            <span>User score:</span> {Math.round(voteAverage * 10)} %{' '}
          </MovieDetailsDiscription>
          <MovieDetailsDiscription>
            <span>Overview:</span> {overview}{' '}
          </MovieDetailsDiscription>
          <MovieDetailsDiscription>
            <span>Genres:</span> {genres.map(genre => genre.name).join(', ')}{' '}
          </MovieDetailsDiscription>
        </DetailsContainer>
      </MovieDetailsContainer>
      <AdditionalContainer>
        <MovieDetailsAdditional>Additional Inforamtion</MovieDetailsAdditional>
        <AdditionalList>
          <AdditionalLink to="cast" state={{ from: backLinkHref }}>
            {' '}
            Cast
          </AdditionalLink>
          <AdditionalLink to="reviews" state={{ from: backLinkHref }}>
            {' '}
            Reviews
          </AdditionalLink>
        </AdditionalList>
        <Outlet />
      </AdditionalContainer>
    </>
  );
};

export default MovieDetails;
