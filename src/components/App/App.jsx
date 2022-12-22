import Home from 'pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import {NavigationLink,AppHeader,NavigationList,NavigationItem} from './App.styled'

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
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
      </Route>
      <Route path="*" element={<div>NotFound</div>} />
    </Routes>
    </>
  );
};
