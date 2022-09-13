import "../App.css";

function Cart() {
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
                                </div>
                                <div class="mt-8">
                                    <p class="text-2xl font-medium tracking-tight">$0.00</p>
                                    <p class="mt-1 text-sm text-gray-500">Detalle</p>
                                </div>
                                <div class="mt-12">
                                    <div class="flow-root">
                                        <ul class="-my-4 divide-y divide-gray-200">
                                            <li class="flex items-center justify-between py-4">
                                                <div class="flex items-start">
                                                    <img
                                                        class="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                                                        src=""
                                                        alt=""
                                                    />
                                                    <div class="ml-4">
                                                        <p class="text-sm"></p>
                                                        <dl class="mt-1 text-xs text-gray-500 space-y-1">
                                                            <div>
                                                                <dt class="inline">Marca:</dt>
                                                                <dd class="inline"></dd>
                                                            </div>
                                                            <div>
                                                                <dt class="inline">Modelo:</dt>
                                                                <dd class="inline"></dd>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p class="text-sm">
                                                        $0.00
                                                        <small class="text-gray-500">x0</small>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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
                                                <label class="sr-only" for="card-number">Card Number</label>
                                                <input
                                                    class="border-gray-200 rounded-t-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                    type="text"
                                                    name="card-number"
                                                    id="card-number"
                                                    placeholder="Card number"
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
                                                <label class="sr-only" for="country">Country</label>
                                            </div>
                                            <div>
                                                <label class="sr-only" for="postal-code">
                                                    ZIP/Post Code
                                                </label>
                                                <input
                                                    class="border-gray-200 rounded-b-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autocomplete="postal-code"
                                                    placeholder="ZIP/Post Code"
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
    )
}

export default Cart;