import React, { useState, createContext } from "react";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addItem = (item, count) => {
        let quantity = cartList.find(product => product.idItem === item.id);
        if (quantity === undefined) {
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

    const setSubItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].countItem;
    }
    
    const setCart = () => {
        let quantity = cartList.map(item => item.countItem);
        return quantity.reduce(((preVal, postVal) => preVal + postVal), null);
    }
    
    const setSubTotal = () => {
        let setSub = cartList.map(item => setSubItem(item.idItem));
        return setSub.reduce((preVal, postVal) => preVal + postVal);
    }

    const setTaxes = () => {
        return setSubTotal() * 0.21;
    }

    const setTotal = () => {
        return setSubTotal() + setTaxes();
    }


    const clearAll = () => {
        setCartList([])
    }

    const removeItem = (id) => {
        let remove = cartList.filter(item => item.idItem != id);
        setCartList(remove);
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clearAll, setCart, setSubItem, setSubTotal, setTaxes, setTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;