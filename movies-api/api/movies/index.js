import express from 'express';
import { getMovies, getMovie, getMovieReviews, getVideos, getCredits } from '../tmdb-api';
import movieModel from './movieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  getMovies().then(movies => res.status(200).send(movies)).catch(next);
  //movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovie(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
    .then(reviews => res.status(200).send(reviews))
    .catch((error) => next(error));
});

router.get('/:id/videos', (req, res, next) => {
  const id = parseInt(req.params.id);
  getVideos(id)
    .then(videos => res.status(200).send(videos))
    .catch((error) => next(error));
});

router.get('/:id/credits', (req, res, next) => {
  const id = parseInt(req.params.id);
  getCredits(id)
    .then(credits => res.status(200).send(credits))
    .catch((error) => next(error));
});

export default router;