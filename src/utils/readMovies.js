import fs from "fs/promises";

const jsonFile = await fs.readFile("./src/config/database.json", {
  encoding: "utf-8",
});

export const movies = JSON.parse(jsonFile);

export function rating(id) {
  const movie = movies.find((movie) => movie.id == id);
  const rating = Math.round(movie.rating);

  switch (rating) {
    case 1:
      return "&#x2605;";

    case 2:
      return "&#x2605;".repeat(2);

    case 3:
      return "&#x2605;".repeat(3);

    case 4:
      return "&#x2605;".repeat(4);

    case 5:
      return "&#x2605;".repeat(5);

    case 6:
      return "&#x2605;".repeat(6);
    case 7:
      return "&#x2605;".repeat(7);
    case 8:
      return "&#x2605;".repeat(8);
    case 9:
      return "&#x2605;".repeat(9);
    case 10:
      return "&#x2605;".repeat(10);

    default:
      "";
      break;
  }
}

export async function writeMovie(newMovies) {
  const moviesToJson = JSON.stringify(newMovies, null, 2);
  await fs.writeFile("./src/config/database.json", moviesToJson, {
    encoding: "utf-8",
  });
}
