import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { MoviesContext } from '../contexts/moviesContext';
import AddToFavouritesButton from '../components/buttons/addToFavourites';

const NowPlayingMoviesPage = () => {
    const context = useContext(MoviesContext);
    const movies = context.nowplaying.filter((m) => {
      return !("favourite" in m);
    });
    
    return (
        <PageTemplate
          title={'Movies In Cinemas Now'}
          movies={movies}
          action={(movie) => {
            return <AddToFavouritesButton movie={movie} />;
          }}
        />
      );
    };

export default NowPlayingMoviesPage;