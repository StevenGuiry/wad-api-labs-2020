import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { MoviesContext } from '../contexts/moviesContext';
import AddToFavouritesButton from '../components/buttons/addToFavourites';
import { AuthContext } from "../contexts/authContext";
import { getUserFavourites } from '../api/movie-api';

const MovieListPage = () => {
  const moviesContext = useContext(MoviesContext);
  const authContext = useContext(AuthContext);
  const movies = moviesContext.movies;
  // const movies = moviesContext.movies.filter((m) => { 
  //   return !("Favourite" in m);
  // });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesButton movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;