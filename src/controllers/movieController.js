import { Router } from "express";
import movieService from "../services/movieService.js";
import { rating } from "../utils/readMovies.js";

const movieController = Router();

movieController.get("/search", (req, res) => {
  const filter = req.query;
  const movies = movieService.getAll(filter);

  res.render("search", { movies, filter });
});

movieController.get("/create", (req, res) => {
  res.render("create");
});
movieController.post("/create", (req, res) => {
  const data = req.body;
  movieService.createMovie(data);
  res.redirect("/");
});

movieController.get("/:movieId/details", (req, res) => {
  const movieId = req.params.movieId;
  // TODO: get movie data for movie id
  const movie = movieService.findOne(movieId);
  let curRating = rating(movieId);

  res.render("details", { movie, curRating });
});

export default movieController;
