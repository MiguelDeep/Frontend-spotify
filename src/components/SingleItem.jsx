import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SingleItem({
  _id,
  image,
  name,
  banner,
  artist,
  idPath
}) {
  return (
    <Link to={`${idPath}/${_id}`} className="single-item" key={_id}>
      <div className="single-item__div-image-button">
        <div className="single-item__div">
          <img className="single-item__div-image" src={image} alt={name} />
        </div>
        <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
      </div>
      <div className="single-item__2lines">
        <div className="single-item__texts">
          <p className="single-item__title">{name}</p>
        </div>
        <p className="single-item__type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
}
