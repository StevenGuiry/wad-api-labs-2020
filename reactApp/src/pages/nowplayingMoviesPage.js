import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { MoviesContext } from '../contexts/moviesContext';
import AddToFavoriteButton from '../components/buttons/addToFavorites';

const NowPlayingMoviesPage = () => {
    const context = useContext(MoviesContext);
    const movies = context.nowplaying.filter((m) => {
      return !("favorite" in m);
    });
    
    return (
        <PageTemplate
          title={'Movies In Cinemas Now'}
          movies={movies}
          action={(movie) => {
            return <AddToFavoriteButton movie={movie} />;
          }}
        />
      );
    };

export default NowPlayingMoviesPage;