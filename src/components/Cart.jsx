import "../App.css";
import "../css/style.css";
import { db } from "../utilities/firebaseConfig";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { doc, setDoc, serverTimestamp, collection, updateDoc, increment } from "firebase/firestore";

function Cart() {

    const itemShow = useContext(CartContext);

    const newOrder = async () => {
        let itemsForDB = itemShow.cartList.map(item => ({
            id: item.idItem,
            brand: item.brandItem,
            price: item.priceItem,
            quantity: item.countItem,
        }));

        let order = {
            buyer:
            {
                name: "Leo Messi",
                email: "leomessi@gmail.com",
                phone: "54 11 0000 0000"
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: itemShow.setTotal()
        }

        console.log(order);
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        alert("Su orden fue creada exitosamente!\n #" + newOrderRef.id)
        window.location.href = "/order"

        itemShow.clearAll();

        itemsForDB.map(async (item) => {
            const itemRef = doc(db, "products", item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.quantity)
            });
        })
    }

    return (
        <>
            <section>
                <h1 className="sr-only">Checkout</h1>
                <div className="relative mx-auto max-w-screen-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="py-12 bg-gray-50 md:py-24">
                            <div className="max-w-lg px-4 mx-auto lg:px-8">
                                <div className="flex items-center">
                                    <h1 className="ml-4 font-medium">Enduro Bikes</h1>
                                    {
                                        (itemShow.cartList.length > 0)
                                            ? <button type="button" className="btn btn-danger" onClick={itemShow.clearAll}>Eliminar todos los productos</button>
                                            : <p className="mt-1 text-sm text-gray-500">&nbsp;&nbsp;Su carrito esta vacio.</p>
                                    }
                                </div>
                                <div className="mt-8">
                                    {(itemShow.cartList.length > 0)
                                        ? <p className="text-2xm font-medium tracking-tight">$ {itemShow.setSubTotal()} </p>
                                        : <p className="text-2xm font-medium tracking-tight">$0.00</p>
                                    }
                                    <p className="mt-1 text-sm text-gray-500">Subtotal</p>
                                    {(itemShow.cartList.length > 0)
                                        ? <p className="text-2xm font-medium tracking-tight">$ {itemShow.setTaxes()} </p>
                                        : <p className="text-2xm font-medium tracking-tight">$0.00</p>
                                    }
                                    <p className="mt-1 text-sm text-gray-500">Impuestos</p>
                                    {(itemShow.cartList.length > 0)
                                        ? <p className="text-2xl font-medium tracking-tight">$ {itemShow.setTotal()} </p>
                                        : <p className="text-2xl font-medium tracking-tight">$0.00</p>
                                    }
                                    <p className="mt-1 text-sm text-gray-500">Total</p>
                                </div>
                                {itemShow.cartList.map(item =>
                                    <div className="mt-12" key={item.idItem}>
                                        <div className="flow-root">
                                            <ul className="-my-4 divide-y divide-gray-200">
                                                <li className="flex items-center justify-between py-4">
                                                    <div className="flex items-start">
                                                        <img
                                                            className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                                                            src={item.picItem}
                                                            alt=""
                                                        />
                                                        <div className="ml-4">
                                                            <p className="text-sm"></p>
                                                            <dl className="mt-1 text-xs text-gray-500 space-y-1">
                                                                <div>
                                                                    <dt className="inline">Marca:</dt>
                                                                    <dd className="inline"> {item.brandItem}</dd>
                                                                </div>
                                                                <div>
                                                                    <dt className="inline">Modelo:</dt>
                                                                    <dd className="inline"> {item.modelItem}</dd>
                                                                </div>
                                                                <div>
                                                                    <dt className="inline">Precio por Unidad:</dt>
                                                                    <dd className="inline"> ${item.priceItem}</dd>
                                                                </div>
                                                                <div>
                                                                    <dt className="inline">Precio Total:</dt>
                                                                    <dd className="inline"> ${item.priceItem * item.countItem}</dd>
                                                                </div>
                                                                <div>
                                                                    <dt className="inline">Cantidad:</dt>
                                                                    <dd className="inline"> {item.countItem}</dd>
                                                                </div>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" className="btn btn-danger" onClick={() => itemShow.removeItem(item.idItem)}>Eliminar</button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        </div>
                        <div className="py-12 bg-white md:py-24">
                            <div className="max-w-lg px-4 mx-auto lg:px-8">
                                <form className="grid grid-cols-6 gap-4">
                                    <div className="col-span-3">
                                        <label className="block mb-1 text-sm text-gray-600" for="first_name">
                                            Nombre
                                        </label>
                                        <input
                                            className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                            type="text"
                                            id="frst_name"
                                        />
                                    </div>
                                    <div className="col-span-3">
                                        <label className="block mb-1 text-sm text-gray-600" for="last_name">
                                            Apellido
                                        </label>
                                        <input
                                            className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                            type="text"
                                            id="last_name"
                                        />
                                    </div>
                                    <div className="col-span-6">
                                        <label className="block mb-1 text-sm text-gray-600" for="email">
                                            E-mail
                                        </label>
                                        <input
                                            className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                            type="email"
                                            id="email"
                                        />
                                    </div>
                                    <div className="col-span-6">
                                        <label className="block mb-1 text-sm text-gray-600" for="phone">
                                            Telefono
                                        </label>
                                        <input
                                            className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                    <fieldset className="col-span-6">
                                        <legend className="block mb-1 text-sm text-gray-600">
                                            Tarjeta de credito
                                        </legend>
                                        <div className="bg-white rounded-lg -space-y-px shadow-sm">
                                            <div>
                                                <label className="sr-only" for="card-number">Nº de Tarjeta</label>
                                                <input
                                                    className="border-gray-200 rounded-t-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                    type="text"
                                                    name="card-number"
                                                    id="card-number"
                                                    placeholder="Nº de Tarjeta"
                                                />
                                            </div>
                                            <div className="flex -space-x-px">
                                                <div className="flex-1">
                                                    <label className="sr-only" for="card-expiration-date">
                                                        Fecha de Vencimiento
                                                    </label>
                                                    <input
                                                        className="border-gray-200 rounded-bl-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                        type="text"
                                                        name="card-expiration-date"
                                                        id="card-expiration-date"
                                                        placeholder="MM / YY"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <label className="sr-only" for="card-cvc">CVC</label>
                                                    <input
                                                        className="border-gray-200 rounded-br-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                        type="text"
                                                        name="card-cvc"
                                                        id="card-cvc"
                                                        placeholder="CVC"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="col-span-6">
                                        <legend className="block mb-1 text-sm text-gray-600">
                                            Direccion
                                        </legend>
                                        <div className="bg-white rounded-lg -space-y-px shadow-sm">
                                            <div>
                                                <input
                                                    className="border-gray-200 rounded-b-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autoComplete="postal-code"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="col-span-6">
                                        <div className="span-order">
                                                <a onClick={newOrder} href="#"></a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;