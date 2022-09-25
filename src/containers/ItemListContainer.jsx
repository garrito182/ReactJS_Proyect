import "../css/style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { firestoreFetch } from "../utilities/firebaseFetch";
import ItemList from "../components/ItemList";

function ItemListContainer() {

    const [data, setData] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setData(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    return (
        <>
            <ItemList items={data} />
        </>
    )
}

export default ItemListContainer;