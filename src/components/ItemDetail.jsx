import "../css/style.css";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; 
import { ItemCount } from "./ItemCount";
import { CartContext } from "./CartContext";
import Loader from "./Loader";

const ItemDetail = ({ item }) => {

    const [ itemCount, setItemCount ] = useState(0);
    const {addItem} = useContext(CartContext);

    const onAdd = (count) => {
        if (count >= 1) {
            alert("Se agregaron " + count + " productos al carrito!");
            setItemCount(count)
        } else {
            alert("No se agregaron productos al carrito!");
        }
        addItem(item, count);
    }

    return (
        <>
            {item && item.picture ?
                <div className="card mb-3" width="256px">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={item.picture} className="img-fluid rounded-start" />
                        </div>
                        <div className="col-md-6">
                            <div className="wsk-cp-text-detail">
                                <div className="category">
                                    <span>{item.brand}</span>
                                </div>
                                <div className="title-product">
                                    <h3>{item.model}</h3>
                                </div>
                                <div className="description-prod-detail">
                                    <p>{item.description}</p>
                                </div>
                                <div className="title-product">
                                    <span className="price">${item.price}</span>
                                </div>
                                <br />
                                {
                                    itemCount === 0
                                        ? <ItemCount start={itemCount} stock={5} onAdd={onAdd} />
                                        : <div className="box-define">
                                        <Link to={`/cart`}><button type="button" className="btn btn-light" data-mdb-ripple-color="dark">Ir al Carrito</button></Link>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Link to={`/`}><button type="button" className="btn btn-light" data-mdb-ripple-color="dark">Seguir Comprando</button></Link>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                : <Loader />
            }
        </>
    );
}

export default ItemDetail;