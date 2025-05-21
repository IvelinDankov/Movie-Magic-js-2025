import express from "express";
import { engine } from "express-handlebars";

const app = express();

// Static asset routes
app.use("/static", express.static("src/public"));

app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(5006, () => console.log(`Server is listening on port 5006...`));
