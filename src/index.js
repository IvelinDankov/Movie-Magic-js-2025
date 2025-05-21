import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>It's works!!!</h1>");
});

app.listen(5006, () => `Server is listening on port 5006...`);
