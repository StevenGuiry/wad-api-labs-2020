import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { MoviesContext } from '../contexts/moviesContext';
import AddToFavouritesButton from '../components/buttons/addToFavourites';

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies;

  return (
    <PageTemplate
      title={"All Movies"}
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesButton movie={movie}/>;
      }}
    />
  );
};

export default MovieListPage;