import rawMoviesList from "./movies.js";

let popularAja = [...rawMoviesList].sort((a, b) =>
  a.vote_average > b.vote_average ? -1 : 1
);
let notpopularAja = [...popularAja].reverse();

const movieList = rawMoviesList.reduce((list, movie) => {
  list.set(movie.id, movie);
  return list;
}, new Map());

const all = rawMoviesList.map((movie) => movie.id);

const popular = popularAja.reduce((list, movie) => {
  if (movie.vote_average >= 7) {
    list.push(movie.id);
  }
  return list;
}, []);

const notPopular = notpopularAja.reduce((list, movie) => {
  if (movie.vote_average < 7) {
    list.push(movie.id);
  }
  return list;
}, []);

export { movieList, all, popular, notPopular };
