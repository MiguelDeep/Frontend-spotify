import { fetchArtistsAndSongs } from "../../../src/Api/api";

let songsArray = [];

const loadSongs = async () => {
  try {
    const response = await fetchArtistsAndSongs();
    songsArray = response.songsArray;
  } catch (error) {
    console.error("Erro ao carregar as músicas:", error);
  }
};

loadSongs();

export { songsArray };
