import React, { useState } from "react"

export const ItemCount = ({ start, stock, onAdd }) => {
    const [amount, setAmount] = useState(start);
    const [inStock, setInStock] = useState(stock);

    const addProduct = () => {
        if (amount >= inStock) {
            setAmount(amount + 0)
        } else {
            setAmount(amount + 1)
        }
    }

    const removeProduct = () => {
        if (amount <= start) {
            setAmount(amount + 0)
        } else {
            setAmount(amount - 1)
        }
    }

    return (
        <>
            <div className="counter btn-group btn-group-sm" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-light" data-mdb-color="dark" onClick={addProduct}>
                    <i className="fas fa-solid fa-plus"></i></button>
                <a type="button" className="btn btn-light" data-mdb-color="dark">{amount}</a>
                <button type="button" className="btn btn-light" data-mdb-color="dark" onClick={removeProduct}>
                    <i className="fas fa-solid fa-minus"></i>
                </button>
            </div>
            <div className="counter-cart btn-group btn-group-sm" role="group" aria-label="Basic example">
                <button onClick={() => onAdd(amount)}>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </a>
                </button>
            </div>
        </>
    )
}
