import { Router } from "express";
import movieService from "../services/movieService.js";

const router = Router();

/* fafasfasgagf
fasfasfas */
router.get("/", async (req, res) => {
  const movies = movieService.getAll();
  res.render("home", { movies });
});

router.get("/about", (req, res) => {
  res.render("about");
});

export default router;
