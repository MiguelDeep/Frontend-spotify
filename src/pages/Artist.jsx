import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SongList } from "../components/SongList";
import { useParams } from "react-router-dom";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

export default function Artist() {
  const { id } = useParams();
  
  const artist = artistArray.filter((artist) => artist._id === id)[0];
  
  const songsArrayFromArtists = songsArray.filter(
    (artistName) => artistName.artist === artist.name
  );
  
  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtists.length - 1)
  );
  const randomIdFromArtist = songsArrayFromArtists[randomIndex]._id
  const url = `/song/${randomIdFromArtist}`;



  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade),var(--_shade)),url(${artist.banner})`
        }}
      >
        <h2 className="artist__title">{artist.name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList artistName={songsArrayFromArtists} />
      </div>

      <Link to={url}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist "
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
}
