import Home from 'pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { NavigationLink, AppHeader, NavigationList, NavigationItem } from './App.styled'
import MovieDetails from 'pages/MovieDetails/MovieDetails'
import Cast from 'components/Cast/Cast'
import Reviews from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <AppHeader>
        <nav>
          <NavigationList><li> <NavigationLink to="/" end> Home</NavigationLink></li>
            <NavigationItem>  <NavigationLink to='/movies'>Movies</NavigationLink></NavigationItem>
          </NavigationList>
     
     
      </nav>
      </AppHeader>
     
         <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/movies" element={<div>Movies </div>} />
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
      </Route>
      <Route path="*" element={<div>NotFound</div>} />
    </Routes>
    </>
  );
};
