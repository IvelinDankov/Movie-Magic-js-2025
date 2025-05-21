import express from "express";
import { engine } from "express-handlebars";
import routes from "./routes.js";

const app = express();

app.use("/static", express.static("src/public/"));
app.use(routes);

app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.listen(5006, () => console.log(`Server is listening on port 5006...`));
