import { movies, writeMovie } from "../utils/readMovies.js";
import { v4 } from "uuid";

export default {
  getAll(filter = {}) {
    let result = movies;
    if (filter.search) {
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(filter.search.toLowerCase())
      );
    }
    if (filter.genre) {
      result = result.filter(
        (movie) => movie.genre.toLowerCase() === filter.genre.toLowerCase()
      );
    }
    if (filter.year) {
      result = result.filter((movie) => movie.year == filter.year);
    }
    return result;
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
      rating: Number(data.rating),
    });

    writeMovie(movies);
  },
};
