import "../css/style.css";
import { Link } from "react-router-dom";

export const Item = ({ id, picture, brand, model, price }) => {

    return (
        <>
            <div className="col-md-3">
                <div className="wsk-cp-product">
                    <div className="wsk-cp-img">
                        <img src={picture} alt="Product" className="img-responsive" />
                    </div>
                    <div className="wsk-cp-text">
                        <div className="category">
                            <span>{brand}</span>
                        </div>
                        <div className="title-product">
                            <h3>{model}</h3>
                        </div>
                        <div className="title-product">
                            <span className="price">${price}</span>
                        </div>
                        <br></br>
                        <hr></hr>
                        <Link to={`/item/${id}`} >
                            <div className="span-detail">
                                <a href="#"></a>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;