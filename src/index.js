import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine("hbs", engine());
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(5006, () => console.log(`Server is listening on port 5006...`));
