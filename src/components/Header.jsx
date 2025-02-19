import { Link } from "react-router-dom";
import logoSpotify from "../assets/logo/spotify-logo.png";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="Logo do spotify" />
      </Link>
      <Link className="header_link" to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
}
