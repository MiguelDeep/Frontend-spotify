import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import ItemList from "./ItemList";

export default function Main() {
  return (
    <div className="main">
      <ItemList
        title="Artistas populares"
        itemsArray={artistArray}
        path={"/artists"}
        idPath={"/artist"}
        items={4}
      />
      <ItemList
        title="Músicas populares"
        itemsArray={songsArray}
        path={"/songs"}
        idPath={"/song"}
        items={11}
      />
    </div>
  );
}
