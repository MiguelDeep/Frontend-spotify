import ItemList from "../components/ItemList";
import { artistArray } from "../assets/database/artists";

export default function Artists() {
  return (
    <div className="main">
      <ItemList
        title="Artistas Populares"
        itemsArray={artistArray}
        path={"/artists"}
        idPath={"/artist"}
        items={artistArray.length}
      />
    </div>
  );
}
