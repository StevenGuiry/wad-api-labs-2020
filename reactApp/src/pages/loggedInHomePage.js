import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { MoviesContext } from '../contexts/moviesContext';
import AddToFavoritesButton from '../components/buttons/addToFavorites';
import { AuthContext } from "../contexts/authContext";

const MovieListPage = () => {
  const moviesContext = useContext(MoviesContext);
  //const authContext = useContext(AuthContext);
  const movies = moviesContext.movies.filter((m) => { 
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;