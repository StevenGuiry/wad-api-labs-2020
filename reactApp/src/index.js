import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MovieDetailsPage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"; //Took out 'Link'
import FavoritesMoviesPage from './pages/favoritesMoviesPage';
import WatchlistMoviesPage from './pages/watchlistMoviesPage';
import TopratedMoviesPage from './pages/topratedMoviesPage';
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import NowPlayingMoviesPage from "./pages/nowplayingMoviesPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>
              <Switch>
                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                <Route path="/reviews/:id" component={MovieReviewPage} />
                <Route exact path="/movies/favorites" component={FavoritesMoviesPage} />
                <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                <Route exact path="/movies/watchlist" component={WatchlistMoviesPage} />
                <Route exact path="/movies/toprated" component={TopratedMoviesPage} />
                <Route exact path="/movies/nowplaying" component={NowPlayingMoviesPage} />
                <Route path="/movies/:id" component={MovieDetailsPage} />
                <Route path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));