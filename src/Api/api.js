import axios from "axios";

const URL = "https://backend-spotify-ij8a.onrender.com";

export const fetchArtistsAndSongs = async () => {
  try {
    const [responseArtists, responseSongs] = await Promise.all([
      axios.get(`${URL}/artists`),
      axios.get(`${URL}/songs`),
    ]);

    return {
      artistArray: responseArtists.data,
      songsArray: responseSongs.data,
    };
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return { artistArray: [], songsArray: [] };
  }
};
