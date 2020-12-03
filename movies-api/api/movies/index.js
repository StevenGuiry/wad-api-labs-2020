import express from 'express';
import {
  getMovies, getMovie, getMovieReviews
} from '../tmdb-api';

const router = express.Router(); //took out 'next' from all three get functions

router.get('/', (req, res, next) => {
  getMovies().then(movies => res.status(200).send(movies));
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovie(id).then(movie => res.status(200).send(movie));
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id).then(reviews => res.status(200).send(reviews));
});

export default router;