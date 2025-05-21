import fs from "fs/promises";

const jsonFile = await fs.readFile("./src/config/database.json", {
  encoding: "utf-8",
});

export const movies = JSON.parse(jsonFile);
