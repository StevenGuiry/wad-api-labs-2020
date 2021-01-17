import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import upcomingMovieModel from '../api/upcoming/upcomingMovieModel';
import nowplayingMovieModel from '../api/nowplaying/nowplayingMovieModel';
import topratedMovieModel from '../api/toprated/topratedMovieModel';
import { movies } from './movies.js';
import { upcoming } from './upcoming.js';
import { nowplaying } from './nowplaying';
import { toprated } from './toprated';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadUpcoming() {
  console.log('load upcoming data');
  console.log(upcoming.length);
  try {
    await upcomingMovieModel.deleteMany();
    await upcomingMovieModel.collection.insertMany(upcoming);
    console.info(`${upcoming.length} Upcoming were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadNowplaying() {
  console.log('load nowplaying data');
  console.log(nowplaying.length);
  try {
    await nowplayingMovieModel.deleteMany();
    await nowplayingMovieModel.collection.insertMany(nowplaying);
    console.info(`${nowplaying.length} Now playing movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadToprated() {
  console.log('load toprated data');
  console.log(toprated.length);
  try {
    await topratedMovieModel.deleteMany();
    await topratedMovieModel.collection.insertMany(toprated);
    console.info(`${toprated.length} Top rated movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}