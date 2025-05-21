import { Router } from "express";
import homeController from "./controllers/homeController.js";
import movieController from "./controllers/movieController.js";

const routes = Router();

routes.use(homeController);
routes.use(movieController);

routes.use((req, res, next) => {
  res.status(404).render("404");
});

export default routes;
