import { movies, writeMovie } from "../utils/readMovies.js";
import { v4 } from "uuid";

export default {
  getAll() {
    return movies;
  },

  findOne(movieId) {
    // TODO: if movie is missing?
    const result = movies.find((movie) => movie.id == movieId);

    return result;
  },

  createMovie(data) {
    const newId = v4();
    movies.push({
      id: newId,
      ...data,
    });

    writeMovie(movies);
  },
};
