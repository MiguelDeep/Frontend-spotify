import axios from "axios"

const URL = "https://backend-spotify-ij8a.onrender.com"

const responseArtists = async()=> await axios.get(URL+"/artists")
const responseSongs = async()=> await axios.get(URL+"/songs")



export const artistArray = responseArtists.data
export const songsArray = responseSongs.data


