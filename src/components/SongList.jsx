import { SongItem } from "./SongItem";
import { useState } from "react";
export const SongList = ({ artistName }) => { 
  //const items = 5 
  const [items, setItems] = useState(5);  
  return (
    <div className="song-list">
      {artistName.filter((current,index)=> index < items).map((currentSongObj, index) => (
        <SongItem key={currentSongObj.id} {...currentSongObj} index={index} />
      ))}

      <p className="song-list__see-more" onClick={()=>{setItems(5+items)}}>Ver mais</p>
    </div>
  );
};
