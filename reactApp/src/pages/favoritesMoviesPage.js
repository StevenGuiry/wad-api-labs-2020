import React, { useContext, useState } from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview';
//import { MoviesContext } from '../contexts/moviesContext';
import { AuthContext } from '../contexts/authContext';
// import { getFavourites } from '../api/movie-api';


const FavoriteMoviesPage = () => {
  const context = useContext(AuthContext);
  const [favorites, setFavourites] = useState({});

  if (context.isAuthenticated) {
    var userFav = async () => {
      let favouriteMovies = await context.getUserFavourites(context.userName);
      return favouriteMovies;
    }
    userFav().then(userFavourites => setFavourites(userFavourites));

    return (
      <MovieListPageTemplate
        movies={favorites}
        title={"Favorite Movies"}
        action={movie => <AddReviewButton movie={movie} />}
      />
    );
  };
}

export default FavoriteMoviesPage;