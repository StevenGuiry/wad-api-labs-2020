import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { AuthContext } from "../../contexts/authContext";
import { addFavourite } from "../../api/movie-api";

const AddToFavouritesTopratedButton = ({ movie }) => {
  const moviesContext = useContext(MoviesContext);
  const authContext = useContext(AuthContext);

  const handleAddToFavourite = e => {
    e.preventDefault();
    moviesContext.addToTopratedFavourites(movie.id);
    addFavourite(authContext.userName, movie.id);

  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavourite}
    >
      Add to Favourites
    </button>
  );
};

export default AddToFavouritesTopratedButton;