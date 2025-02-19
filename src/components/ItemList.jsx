import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";
import { useLocation } from "react-router-dom";

export default function ItemList({
  title,
  itemsArray,
  path,
  idPath,
  items,
}) {
  const { pathname } = useLocation();
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        {pathname === "/" ? (
          <Link className="item-lis__link" to={path}>
            Mostrar tudo
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="item-list__container">
        {itemsArray.map((item, index) =>
          index <= items ? (
            <SingleItem key={index} {...item} idPath={idPath} />
          ) : null
        )}
      </div>
    </div>
  );
}
