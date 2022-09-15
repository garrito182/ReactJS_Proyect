import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

        const addItem = (product) => {
            setCartList([
                ...cartList,
                product
            ])
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