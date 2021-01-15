import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { MoviesContext } from '../contexts/moviesContext';
import AddToFavoriteButton from '../components/buttons/addToFavorites';

const TopRatedMoviesPage = () => {
    const context = useContext(MoviesContext);
    const movies = context.toprated.filter((m) => {
      return !("favorite" in m);
    });
    
    return (
        <PageTemplate
          title={'Top Rated Movies'}
          movies={movies}
          action={(movie) => {
            return <AddToFavoriteButton movie={movie} />;
          }}
        />
      );
    };

export default TopRatedMoviesPage;