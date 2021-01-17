import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import usersRouter from './api/users';
import genreRouter from './api/genres';
import upcomingRouter from './api/upcoming';
import nowplayingRouter from './api/nowplaying';
import topratedRouter from './api/toprated';
import bodyParser from 'body-parser';
import './db';
import {loadUsers, loadMovies, loadUpcoming, loadNowplaying, loadToprated} from './seedData';
import session from 'express-session';
import passport from './authenticate';

dotenv.config();


if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadUpcoming();
  loadNowplaying();
  loadToprated();
}

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//session middleware
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(express.static('public'));
app.use(passport.initialize());
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/upcoming', upcomingRouter);
app.use('/api/nowplaying', nowplayingRouter);
app.use('/api/toprated', topratedRouter);
app.use('/api/users', usersRouter);
app.use('/api/genres', genreRouter);
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});