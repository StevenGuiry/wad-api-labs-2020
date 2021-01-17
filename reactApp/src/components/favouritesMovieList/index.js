import React from "react";
import FavouritesMovie from "../favouritesMovieCard/index";
import "./favouritesMovieList.css";

const FavouritesMovieList = ({movies, action}) => {
  const movieCards = movies.map(m => (
    <FavouritesMovie key={m.id} movie={m} action={action} />
  ));
  return <div  className="row movies bg-primary">{movieCards}</div>;
};

export default FavouritesMovieList;