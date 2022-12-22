import { Link } from 'react-router-dom';
import {TrendingMoviesList,TrendingMoviesItem,TrendingMoviesImg,TrendingMoviesText} from './TrendingMovies.styled'

const TrendingMovies = ({ trending }) => {
   
  return (
    <>
      <TrendingMoviesList>
        {trending.map(({id,posterPath,title,releaseDate}) => (
            <Link to='/movies/:movieId'>
                 <TrendingMoviesItem key={id}>
            <TrendingMoviesImg
              src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                    alt={title}
                    width='320'
                />
                <TrendingMoviesText>{title}</TrendingMoviesText>
                <TrendingMoviesText>{releaseDate ? new Date(releaseDate).getFullYear() : '---'}</TrendingMoviesText>
            </TrendingMoviesItem>
            </Link>
            
        ))}
      </TrendingMoviesList>
    </>
  );
};

export default TrendingMovies;
