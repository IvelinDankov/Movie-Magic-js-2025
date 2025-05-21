import { Router } from "express";

const router = Router();

/* fafasfasgagf
fasfasfas */
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.use((req, res, next) => {
  res.status(404).render("404");
});

export default router;
