import { Player } from "../components/Player.jsx";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

export default function Song() {
  const { id } = useParams();

  const song = songsArray.find((song) => song._id === id);

  if (!song) {
    return <p>Música não encontrada</p>;
  }

  const artist = artistArray.find((artist) => artist.name === song.artist);

  return (
    <div className="song">
      <div className="song__container">  
        <div className="song__image-container">
          <img
            src={song.image}
            alt={`Imagem do álbum/música: ${song.name}`} 
          />
        </div>
      </div>

      <div className="song__bar">
        <div className="song__artist-image">
          {artist ? (
            <Link to={`/artist/${artist._id}`}>
              <img
                width={75}
                height={75}
                src={song.image}
                alt={`Imagem do artista: ${song.artist}`}
              />
            </Link>
          ) : (
            <img
              width={75}
              height={75}
              src={song.image}
              alt="Imagem do artista desconhecido"
            />
          )}
        </div>
        <Player duration={song.duration} audio={song.audio} _id={song._id} />
        <div>
          <p className="song__name">{song.name}</p>
          <p>{song.artist}</p>
        </div>
      </div>
    </div>
  );
}
