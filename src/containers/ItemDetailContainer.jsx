import "../css/style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utilities/CustomFetch";
import ItemDetail from "../components/ItemDetail";
import products from "../utilities/Products";

function ItemDetailContainer() {
    const [data, setData] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
        customFetch(500, products.find(item => item.id == idItem))
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return (
        <ItemDetail item={data} />
    )
}

export default ItemDetailContainer;