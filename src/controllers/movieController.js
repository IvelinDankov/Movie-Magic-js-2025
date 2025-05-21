import { Router } from "express";

const movieController = Router();

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.get("/:id/details", (req, res) => {
  const movieId = req.params.id;

  res.render("details");
});

export default movieController;
