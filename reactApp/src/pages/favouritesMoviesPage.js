import React, { useContext, useState } from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview';
import { AuthContext } from '../contexts/authContext';



const FavouriteMoviesPage = () => {
  const context = useContext(AuthContext);
  const [favourites, setFavourites] = useState({});

  if (context.isAuthenticated) {
    var userFav = async () => {
      let favouriteMovies = await context.getUserFavourites(context.userName);
      return favouriteMovies;
    }
    userFav().then(userFavourites => setFavourites(userFavourites));

    return (
      <MovieListPageTemplate
        movies={favourites}
        title={"Favourite Movies"}
        action={movie => <AddReviewButton movie={movie} />}
      />
    );
  };
}

export default FavouriteMoviesPage;