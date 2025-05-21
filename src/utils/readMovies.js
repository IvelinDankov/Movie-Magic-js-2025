import fs from "fs/promises";

const jsonFile = await fs.readFile("./src/config/database.json", {
  encoding: "utf-8",
});

export const movies = JSON.parse(jsonFile);

export function rating(id) {
  const movie = movies.find((movie) => movie.id == id);
  const rating = Math.trunc(movie.rating);

  return "⭐".repeat(rating);
}

export async function writeMovie(newMovies) {
  const moviesToJson = JSON.stringify(newMovies, null, 2);
  await fs.writeFile("./src/config/database.json", moviesToJson, {
    encoding: "utf-8",
  });
}
