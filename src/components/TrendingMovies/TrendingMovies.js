import {
  TrendingMoviesList,
  TrendingLink,
  TrendingMoviesItem,
  TrendingMoviesImg,
  TrendingMoviesText,
  TrendingMoviesData
} from './TrendingMovies.styled';
import PropTypes from 'prop-types';

const TrendingMovies = ({ trending }) => {
  return (
    <>
      <TrendingMoviesList>
        {trending.map(({ id, posterPath, title, releaseDate }) => (
          <TrendingLink to={`/movies/${id}`}>
            <TrendingMoviesItem key={id}>
              <TrendingMoviesImg
                src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                alt={title}
                width="320"
              />

              <TrendingMoviesText>{title}</TrendingMoviesText>
              <TrendingMoviesData>
                {releaseDate ? new Date(releaseDate).getFullYear() : '---'}
              </TrendingMoviesData>
            </TrendingMoviesItem>
          </TrendingLink>
        ))}
      </TrendingMoviesList>
    </>
  );
};

TrendingMovies.propTypes = {
  trending:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    posterPath: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
  }),)
}

export default TrendingMovies;
