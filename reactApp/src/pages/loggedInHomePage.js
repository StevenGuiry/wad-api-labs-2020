import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { MoviesContext } from '../contexts/moviesContext';
import AddToFavouritesButton from '../components/buttons/addToFavourites';

const MovieListPage = () => {
  const moviesContext = useContext(MoviesContext);
  const movies = moviesContext.movies.filter((m) => { 
    return !("favourite" in m);
  });

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