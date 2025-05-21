import { Router } from "express";
import movieService from "../services/movieService.js";
import { rating } from "../utils/readMovies.js";

const movieController = Router();

movieController.get("/create", (req, res) => {
  res.render("create");
});
movieController.post("/create", (req, res) => {
  const data = req.body;
  console.log(data);
  res.end();
});

movieController.get("/:movieId/details", (req, res) => {
  const movieId = req.params.movieId;
  // TODO: get movie data for movie id
  const movie = movieService.findOne(movieId);
  let curRating = rating(movieId);

  res.render("details", { movie, curRating });
});

export default movieController;
