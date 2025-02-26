import React from "react";
import { Link } from "react-router-dom";

export const SongItem = ({image,name,duration,_id,index }) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p className="song-item__number-album">{index+1}</p>
        <div className="song-item__album">
          <img
            className="song-item__image"
            src={image}
            alt={name}
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>
      <p className="">{duration}</p>
    </Link>
  );
};
