import "../css/style.css";
import { Item } from "./Item";

const ItemList = ({ items }) => {
    return (
        items.map(item =>
            <Item
                key={item.id}
                id={item.id}
                brand={item.brand}
                model={item.model}
                price={item.price}
                picture={item.picture} />
        )
    );
}

export default ItemList;