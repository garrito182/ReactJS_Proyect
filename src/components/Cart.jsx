import "../App.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {

    const itemShow = useContext(CartContext)
    return (
        <>
            <section>
                <h1 class="sr-only">Checkout</h1>
                <div class="relative mx-auto max-w-screen-2xl">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div class="py-12 bg-gray-50 md:py-24">
                            <div class="max-w-lg px-4 mx-auto lg:px-8">
                                <div class="flex items-center">
                                    <h1 class="ml-4 font-medium">Enduro Bikes</h1>
                                    {
                                        (itemShow.cartList.length > 0)
                                            ? <button type="button" class="btn btn-danger" onClick={itemShow.clearAll}>Eliminar todos los productos</button>
                                            : <p class="mt-1 text-sm text-gray-500">&nbsp;&nbsp;Su carrito esta vacio.</p>
                                    }
                                </div>
                                <div class="mt-8">
                                    <p class="text-2xl font-medium tracking-tight">$0.00</p>
                                    <p class="mt-1 text-sm text-gray-500">Detalle</p>
                                </div>
                                {itemShow.cartList.map(item =>
                                    <div class="mt-12" src={item.idItem}>
                                        <div class="flow-root">
                                            <ul class="-my-4 divide-y divide-gray-200">
                                                <li class="flex items-center justify-between py-4">
                                                    <div class="flex items-start">
                                                        <img
                                                            class="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                                                            src={item.picItem}
                                                            alt=""
                                                        />
                                                        <div class="ml-4">
                                                            <p class="text-sm"></p>
                                                            <dl class="mt-1 text-xs text-gray-500 space-y-1">
                                                                <div>
                                                                    <dt class="inline">Marca:</dt>
                                                                    <dd class="inline"> {item.brandItem}</dd>
                                                                </div>
                                                                <div>
                                                                    <dt class="inline">Modelo:</dt>
                                                                    <dd class="inline"> {item.modelItem}</dd>
                                                                </div>
                                                                <div>
                                                                    <dt class="inline">Precio por Unidad:</dt>
                                                                    <dd class="inline"> ${item.priceItem}</dd>
                                                                </div>
                                                                <div>
                                                                    <dt class="inline">Precio Total:</dt>
                                                                    <dd class="inline"> ${item.priceItem * item.countItem}</dd>
                                                                </div>
                                                                <div>
                                                                    <dt class="inline">Cantidad:</dt>
                                                                    <dd class="inline"> {item.countItem}</dd>
                                                                </div>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div>
                                                    <button type="button" class="btn btn-danger" onClick={() => itemShow.removeItem(item.idItem)}>Eliminar</button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        </div>
                        <div class="py-12 bg-white md:py-24">
                            <div class="max-w-lg px-4 mx-auto lg:px-8">
                                <form class="grid grid-cols-6 gap-4">
                                    <div class="col-span-3">
                                        <label class="block mb-1 text-sm text-gray-600" for="first_name">
                                            Nombre
                                        </label>
                                        <input
                                            class="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                            type="text"
                                            id="frst_name"
                                        />
                                    </div>
                                    <div class="col-span-3">
                                        <label class="block mb-1 text-sm text-gray-600" for="last_name">
                                            Apellido
                                        </label>
                                        <input
                                            class="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                            type="text"
                                            id="last_name"
                                        />
                                    </div>
                                    <div class="col-span-6">
                                        <label class="block mb-1 text-sm text-gray-600" for="email">
                                            E-mail
                                        </label>
                                        <input
                                            class="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                            type="email"
                                            id="email"
                                        />
                                    </div>
                                    <div class="col-span-6">
                                        <label class="block mb-1 text-sm text-gray-600" for="phone">
                                            Telefono
                                        </label>
                                        <input
                                            class="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                    <fieldset class="col-span-6">
                                        <legend class="block mb-1 text-sm text-gray-600">
                                            Tarjeta de credito
                                        </legend>
                                        <div class="bg-white rounded-lg -space-y-px shadow-sm">
                                            <div>
                                                <label class="sr-only" for="card-number">Nº de Tarjeta</label>
                                                <input
                                                    class="border-gray-200 rounded-t-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                    type="text"
                                                    name="card-number"
                                                    id="card-number"
                                                    placeholder="Numero"
                                                />
                                            </div>
                                            <div class="flex -space-x-px">
                                                <div class="flex-1">
                                                    <label class="sr-only" for="card-expiration-date">
                                                        Fecha de Vencimiento
                                                    </label>
                                                    <input
                                                        class="border-gray-200 rounded-bl-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                        type="text"
                                                        name="card-expiration-date"
                                                        id="card-expiration-date"
                                                        placeholder="MM / YY"
                                                    />
                                                </div>
                                                <div class="flex-1">
                                                    <label class="sr-only" for="card-cvc">CVC</label>
                                                    <input
                                                        class="border-gray-200 rounded-br-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                        type="text"
                                                        name="card-cvc"
                                                        id="card-cvc"
                                                        placeholder="CVC"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset class="col-span-6">
                                        <legend class="block mb-1 text-sm text-gray-600">
                                            Direccion
                                        </legend>
                                        <div class="bg-white rounded-lg -space-y-px shadow-sm">
                                            <div>
                                                <input
                                                    class="border-gray-200 rounded-b-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autocomplete="postal-code"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div class="col-span-6">
                                        <button
                                            class="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                                            type="submit"
                                        >
                                            Pagar
                                        </button>
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