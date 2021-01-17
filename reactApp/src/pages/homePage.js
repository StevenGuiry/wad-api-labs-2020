import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { MoviesContext } from '../contexts/moviesContext';
import AddTofavouritesButton from '../components/buttons/addToFavourites';

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => { 
    return !("Favourite" in m);
  });

  return (
    <PageTemplate
      title={"All Movies"}
      movies={movies}
      action={(movie) => {
        return <AddTofavouritesButton movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;