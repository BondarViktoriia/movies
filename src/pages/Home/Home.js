import { getTrendingMovies } from 'components/services/Api';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { useEffect, useState } from 'react';
import { HomeContainer, HomeTitle } from './Home.styled';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  const [, setError] = useState(null);
  useEffect(() => {
    getTrendingMovies()
      .then(setTrendingMovies)
      .catch(error => setError(error));
  }, []);

  return (
    <HomeContainer>
      <main>
        <HomeTitle>TRENDING MOVIES</HomeTitle>
        {trendingMovies && (
          <TrendingMovies movies={trendingMovies} location={location} />
        )}
      </main>
    </HomeContainer>
  );
};

export default Home;
