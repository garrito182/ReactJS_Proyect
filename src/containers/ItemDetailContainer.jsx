import "../css/style.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utilities/firebaseFetch";
import ItemDetail from "../components/ItemDetail";


function ItemDetailContainer() {
    const [data, setData] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={data} />
    )
}

export default ItemDetailContainer;