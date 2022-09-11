import "../css/style.css";
import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import customFetch from "../utilities/CustomFetch";
import products from "../utilities/Products";
import { useParams } from "react-router-dom"

function ItemListContainer() {

    const [data, setData] = useState([]);
    const { idCategory } = useParams();
    
    useEffect(() => {
        if (idCategory) {
            customFetch(2000, products.filter(item => item.id === parseInt(idCategory)))
            .then(result => setData(result))
            .catch(err => console.log(err))
        } else {
            customFetch(2000, products)
            .then(result => setData(result))
            .catch(err => console.log(err))
        }
    }, [idCategory]);

    return (
            <ItemList items={data} />
        )
}

export default ItemListContainer;