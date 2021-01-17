import express from 'express';
import { getTopratedMovies , getMovieReviews } from '../tmdb-api';
import topratedModel from './topratedMovieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  topratedModel.find().then(movies => res.status(200).send(movies)).catch(next);
});


router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  topratedModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
    .then(reviews => res.status(200).send(reviews))
    .catch((error) => next(error));
});
export default router;