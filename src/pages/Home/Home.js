import { getTrendingMovies } from "components/services/Api";
import TrendingMovies from "components/TrendingMovies/TrendingMovies";
import { useEffect, useState } from "react";
import { HomeContainer,HomeTitle } from './Home.styled';

const Home = () => {
    const [trendingMovies,setTrendingMovies] = useState([])
    console.log(trendingMovies)
    useEffect(() => {
        getTrendingMovies().then(setTrendingMovies)
    }, [])
    
    return (<HomeContainer>
        <main>
              <HomeTitle>TRENDING MOVIES</HomeTitle>
        {trendingMovies && <TrendingMovies trending={trendingMovies} />}
        </main>
      
    </HomeContainer>)
}


export default Home;