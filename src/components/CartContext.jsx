import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    
    const addItem = (item, count) => {
        let quantity = cartList.find(product => product.idItem === item.id);
        if ( quantity === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    picItem: item.picture,
                    brandItem: item.brand,
                    modelItem: item.model,
                    priceItem: item.price,
                    countItem: count,
                }
            ]);
        } else {
            quantity.countItem += count;
        }
    }

        const clearAll = () => {
            setCartList([])
        }

        const removeItem = (id) => {
            let remove = cartList.filter(item => item.idItem != id);
            setCartList(remove);
        }

        return (
            <CartContext.Provider value={{ cartList, addItem, removeItem, clearAll }}>
                {children}
            </CartContext.Provider>
        );
    }

export default CartContextProvider;