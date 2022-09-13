import { useState } from "react";
import "../css/style.css";
import { ItemCount } from "./ItemCount";
import Loader from "./Loader";
import { Link } from "react-router-dom"; 

const ItemDetail = ({ item }) => {

    const { itemCount, setItemCount } = useState()
    const onAdd = (count) => {
        if (count >= 1) {
            alert("Se agregaron " + count + " productos al carrito!");
        } else {
            alert("No se agregaron productos al carrito!");
        }
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
                                {
                                    itemCount === 0
                                        ? <ItemCount start={itemCount} stock={5} onAdd={onAdd} />
                                        : <Link to={`/cart`}><div className="span-cart"><a href="#"></a></div></Link>
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