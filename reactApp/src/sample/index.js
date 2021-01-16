import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Movies, Profile, HomePage } from "./pages";
import LoginPage from "../pages/loginPage";
import SignUpPage from "../pages/signUpPage";
import PrivateRoute from "../routes/privateRoute";
import AuthHeader from "../components/authHeader/authHeader";
import AuthProvider from "../contexts/authContext";
import MoviesContext from "../contexts/moviesContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <MoviesContext>
          <Switch>
            <Route path="/public" component={PublicPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />,
            <Route exact path="/" component={HomePage} />
            <PrivateRoute path="/movies" component={Movies} />
            <PrivateRoute path="/profile" component={Profile} />
            <Redirect from="*" to="/" />
          </Switch>
        </MoviesContext>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
