import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTopRated, getNowPlaying } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        toprated: state.toprated.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        nowplaying: state.nowplaying.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
      };
    case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies], toprated: [...state.toprated], nowplaying: [...state.nowplaying]
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], toprated: [...state.toprated], nowplaying: [...state.nowplaying] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], toprated: [...state.toprated], nowplaying: [...state.nowplaying] };
    case "load-toprated":
      return { toprated: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming], nowplaying: [...state.nowplaying] };
    case "load-nowplaying":
      return { nowplaying: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming], toprated: [...state.toprated] }
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        toprated: [...state.toprated],
        nowplaying: [...state.nowplaying],
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], toprated: [], nowplaying: [] });

  const addToFavorites = (movieId) => {
    const indexMovies = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[indexMovies], toprated: state.toprated[indexMovies], nowplaying: state.nowplaying[indexMovies] } });
  };

  const addToWatchlist = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRated().then((movies) => {
      dispatch({ type: "load-toprated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNowPlaying().then((movies) => {
      dispatch({ type: "load-nowplaying", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        toprated: state.toprated,
        nowplaying: state.nowplaying,
        addToFavorites: addToFavorites,
        addToWatchlist: addToWatchlist,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;