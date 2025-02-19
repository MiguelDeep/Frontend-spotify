import ItemList from '../components/ItemList'
import { songsArray } from '../assets/database/songs'

export default function Songs() {
  return (
     <div className="main">
          <ItemList
            title="Artistas Músicas"
            itemsArray={songsArray}
            path={"/artists"}
            idPath={"/artist"}
            items={songsArray.length}
          />
        </div>
  )
}
