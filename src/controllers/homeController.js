import { Router } from "express";
import { movies } from "../utils/readMovies.js";

const router = Router();

/* fafasfasgagf
fasfasfas */
router.get("/", async (req, res) => {
  res.render("home", { movies });
});

router.get("/about", (req, res) => {
  res.render("about");
});

export default router;
