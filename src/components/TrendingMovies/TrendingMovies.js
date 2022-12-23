import {
  TrendingMoviesList,
  TrendingLink,
  TrendingMoviesItem,
  TrendingMoviesImg,
  TrendingMoviesText,
  TrendingMoviesData
} from './TrendingMovies.styled';
import PropTypes from 'prop-types';
import imageNotFound from '../../images/notfound.png';

const TrendingMovies = ({ movies,location }) => {
  return (
    <>
      <TrendingMoviesList>
        {movies.map(({ id, posterPath, title, releaseDate }) => (
          <TrendingLink to={`/movies/${id}`} state={{ from: location }}>
            <TrendingMoviesItem key={id}>
              <TrendingMoviesImg
                 src={
                  posterPath 
                    ? `https://image.tmdb.org/t/p/w500/${posterPath}`
                    : imageNotFound
                }
            
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
  }),),
  location:PropTypes.object.isRequired,

}

export default TrendingMovies;
