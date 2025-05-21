import express from "express";
import { engine } from "express-handlebars";

const app = express();

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
  res.render("home", { layout: false });
});

app.listen(5006, () => console.log(`Server is listening on port 5006...`));
