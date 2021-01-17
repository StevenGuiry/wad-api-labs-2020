import React, { useContext } from "react";
import MovieListPageTemplate from "../components/templateFavouritesPage";
import AddReviewButton from '../components/buttons/addReview';
import { MoviesContext } from "../contexts/moviesContext";

const FavouriteMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movieFavourites = context.movies.filter(m => m.favourite);
  const topratedFavourites = context.toprated.filter(m => m.favourite);
  const nowplayingFavourites = context.nowplaying.filter(m => m.favourite);

  const allFavourites = [...movieFavourites, ...topratedFavourites, ...nowplayingFavourites];

  return (
    <MovieListPageTemplate
      movies={allFavourites}
      title={"Favourite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavouriteMoviesPage;