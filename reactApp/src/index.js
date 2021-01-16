import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import LoggedInHomePage from "./pages/loggedInHomePage";
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
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import HomePage from "./pages/homePage";
import PrivateRoute from "./routes/privateRoute";
import AuthProvider from "./contexts/authContext";

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <AuthProvider>
          <SiteHeader />
          <div className="container-fluid">
            <MoviesContextProvider>
              <GenresContextProvider>
                <Switch>
                  <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                  <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                  <PrivateRoute exact path="/movies/favorites" component={FavoritesMoviesPage} />
                  <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                  <PrivateRoute exact path="/movies/watchlist" component={WatchlistMoviesPage} />
                  <PrivateRoute exact path="/movies/toprated" component={TopratedMoviesPage} />
                  <PrivateRoute exact path="/movies/nowplaying" component={NowPlayingMoviesPage} />
                  <PrivateRoute path="/movies/:id" component={MovieDetailsPage} />
                  <PrivateRoute path="/home" component={LoggedInHomePage} />
                  <Route exact path="/login" component={LoginPage} />
                  <Route path="/signup" component={SignUpPage} />
                  <Route path="/" component={HomePage} />
                  <Redirect from="*" to="/" />
                </Switch>
              </GenresContextProvider>
            </MoviesContextProvider>
          </div>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));